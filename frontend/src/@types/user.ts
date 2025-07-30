import { User } from "@prisma/client";

export type UserType = Omit<User, "createdAt" | "hashPassword">;

export const userInitValues: UserType = {
  email: "",
  id: "",
  image: "",
  name: "",
};
