import { User } from "@prisma/client";

export type UserType = Omit<
  User,
  "createdAt" | "hashPassword" | "availableSpace" | "usedSpace"
>;

export const userInitValues: UserType = {
  email: "",
  id: "",
  imageUrl: "",
  name: "",
};
