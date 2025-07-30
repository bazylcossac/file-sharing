"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MainLoader from "../App/MainLoader";
import useUserStore from "@/utils/store/User/user.bear";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status, data } = useSession();
  const setUserData = useUserStore((state) => state.setUserData);
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated" || status === "loading") {
      router.replace("/");
    } else {
      router.replace("/dashboard");
    }
  }, [status, router]);

  useEffect(() => {
    if (data?.user.) {
      setUserData(data.user);
    }
  }, []);

  if (status === "loading") {
    return <MainLoader />;
  }

  return <>{children}</>;
}
