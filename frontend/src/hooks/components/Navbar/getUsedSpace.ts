import { auth } from "@/auth";
import { USER_QUERY_KEYS } from "@/constants/queryKeys";
import prisma from "@/utils/dataBase/prisma";
import { useQuery } from "@tanstack/react-query";

const userSpace = async () => {
  const user = await auth();
  if (!user) {
    console.error("No session");
    throw new Error("No session");
  }
  try {
    return await prisma.user.findMany({
      where: {
        email: user.user.email,
      },
      select: {
        availableSpace: true,
        usedSpace: true,
      },
    });
  } catch {
    console.error("Failed to get user space");
    throw new Error("Failed to get user space");
  }
};

export const useUserSpace = () => {
  return useQuery({
    queryKey: [USER_QUERY_KEYS.userSpace],
    queryFn: userSpace,
    refetchOnWindowFocus: true,
  });
};
