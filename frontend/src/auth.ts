import NextAuth, { DefaultSession } from "next-auth";

import Google from "next-auth/providers/google";
import { handleUserData } from "./utils/dataBase/User/user";

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
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
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
        const user = await handleUserData({
          name: session.user.name,
          email: session.user.email,
          imageUrl: session.user.image || "",
        });

        session.user.email = user.email;
        session.user.id = user.id;
        session.user.imageUrl = user.imageUrl;
        session.user.name = user.name;
      }
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
});
