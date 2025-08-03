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
        email: user.user.email,
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
