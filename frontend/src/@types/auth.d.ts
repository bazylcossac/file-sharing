import type { DefaultSession, DefaultUser } from "@auth/core";
import type { JWT as DefaultJWT } from "@auth/core/jwt";

declare module "@auth/core" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      imageUrl: string;
    } & DefaultSession["user"];
  }
  interface User extends DefaultUser {
    id: string;
    name: string;
    email: string;
    imageUrl: string;
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
