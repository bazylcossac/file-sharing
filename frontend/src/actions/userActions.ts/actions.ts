"use server";
import { Folder } from "@/@types/Folder";
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

export const fetchUserFolders = async () => {
  const user = await auth();
  if (!user) {
    console.error("No session");
    throw new Error("No session");
  }
  try {
    const file = await prisma.folder.findMany({
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

export const addFolder = async (fileData: unknown) => {
  const user = await auth();
  if (!user) {
    console.error("No session");
    throw new Error("No session");
  }

  const parsedData = Folder.safeParse(fileData);
  console.log(parsedData.error);
  if (!parsedData.success) {
    return;
  }

  try {
    await prisma.folder.create({
      data: {
        ...parsedData.data,
        userId: user.user.id,
      },
    });
  } catch (err) {
    console.error("Failed to create file ", err);
    throw new Error("Failed to create file");
  }
};
