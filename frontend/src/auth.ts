import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { loginSchema } from "./lib/schemas/shemas";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "./utils/dataBase/prisma";
import { getUserByEmail } from "./utils/dataBase/User/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(prisma),
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
    // authorized: async ({ auth, request }) => {
    //   const isLoggedIn = !!auth?.user;

    //   const isTryingToAccessApp = request.url !== "/";
    //   const isTryinToAccessLoginPage = request.url === "/";

    //   // User is logged in and trying to access a protected route
    //   if (isLoggedIn && isTryingToAccessApp) {
    //     return true;
    //   }
    //   // User is not logged in and trying to access a protected route
    //   if (!isLoggedIn && isTryingToAccessApp) {
    //     return Response.redirect(new URL("/", request.nextUrl));
    //   }
    //   if (isLoggedIn && isTryinToAccessLoginPage) {
    //     return false;
    //   }

    //   return false;
    // },
  },

  secret: process.env.AUTH_SECRET,
});
