"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MainLoader from "../App/MainLoader";
import useUserStore from "@/utils/store/User/user.bear";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status, data } = useSession();
  const setUserData = useUserStore((state) => state.setUserData);
  const router = useRouter();
  const queryClient = new QueryClient();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    } else {
      router.replace("/dashboard");
    }
  }, [status, router]);

  useEffect(() => {
    if (data?.user) {
      setUserData(data.user);
    }
  }, [data, setUserData]);

  if (status === "loading") {
    return <MainLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
