import { UserType } from "@/@types/user";
import prisma from "../prisma";

export const getUserByEmail = async (email: string) => {
  if (!email) return;
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    // TODO dodac zwrotke z bledami zeby wyswietlic w UI
    if (!user) return;

    return user;
  } catch {
    // TODO tu tak samo
    return null;
  }
};

export const handleUserData = async (userData: Omit<UserType, "id">) => {
  try {
    const user = await prisma.user.upsert({
      where: {
        email: userData.email,
      },
      create: {
        email: userData.email,
        name: userData.name,
        imageUrl: userData.imageUrl,
      },
      update: {
        name: userData.name,
        imageUrl: userData.imageUrl,
      },
      select: {
        email: true,
        id: true,
        name: true,
        imageUrl: true,
      },
    });
    return user;
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
    throw new Error(error.message);
  }
};
