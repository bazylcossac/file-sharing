import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { loginSchema } from "./lib/schemas/shemas";
import { getUserByEmail } from "./utils/dataBase/User/user";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      imageUrl: string;
    };
  }
}

declare module "@auth/core/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    name: string;
    email: string;
    imageUrl: string;
  }
}

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

        console.log("ZALOGOWANO");

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          imageUrl: user.imageUrl,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
      }
    },
    async session({ session, token }) {
      if (token) {
        session.userId = token.id;
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.imageUrl = token.imageUrl;
        session.user.name = token.name;
      }
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
});
