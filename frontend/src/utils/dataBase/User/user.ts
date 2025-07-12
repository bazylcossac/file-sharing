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
