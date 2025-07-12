import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { loginSchema } from "./lib/schemas/shemas";

import { getUserByEmail } from "./utils/DataBase/User/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { type: "email", label: "Email" },
        password: {},
      },
      authorize: async (credentials) => {
        // PRZY LGOOWANIU

        const data = loginSchema.safeParse(credentials);
        // TODO jakas zwrotka
        if (!data.success) return null;

        const { email, password } = data.data;

        const user = await getUserByEmail(email);

        if (!user) return null;

        const hash = await bcrypt.compare(password, user.hashPassword);

        if (!hash) return null;

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ user, session }) {
      if (user) {
        session.userId = user.id;
        session.user.email = user.email;
        session.user.id = user.id;
        session.user.name = user.name;
      }
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
});
