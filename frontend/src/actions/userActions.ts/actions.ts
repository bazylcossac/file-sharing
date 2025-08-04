"use server";

import { auth } from "@/auth";
import prisma from "@/utils/dataBase/prisma";

export const fetchUserSpace = async () => {
  const user = await auth();

  if (!user) {
    console.error("No session");
    throw new Error("No session");
  }
  try {
    const userData = await prisma.user.findUnique({
      where: {
        id: user.user.id,
      },
      select: {
        usedSpace: true,
        availableSpace: true,
      },
    });
    return userData;
  } catch (err) {
    console.error("Failed to get user space ", err);
    throw new Error("Failed to get user space");
  }
};

export const fetchUserFiles = async () => {
  const user = await auth();
  if (!user) {
    console.error("No session");
    throw new Error("No session");
  }
  try {
    const file = await prisma.file.findMany({
      where: {
        userId: user.user.id,
      },
    });
    return file;
  } catch (err) {
    console.error("Failed to get user space ", err);
    throw new Error("Failed to get user space");
  }
};
