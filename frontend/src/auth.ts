import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { loginSchema } from "./lib/schemas/shemas";

import { getUserByEmail } from "./utils/dataBase/User/user";
import { log } from "console";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    Credentials({
      credentials: {
        email: { type: "email", label: "Email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        // PRZY LGOOWANIU
        // test@test.com
        // tajnehaslo

        const data = await loginSchema.parseAsync(credentials);
        // TODO jakas zwrotka

        const { email, password } = data;

        const user = await getUserByEmail(email);

        if (!user) return null;

        const hash = await bcrypt.compare(password, user.hashPassword);

        if (!hash) return null;

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.userId = token.id;
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.name = token.name;
      }
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
});
