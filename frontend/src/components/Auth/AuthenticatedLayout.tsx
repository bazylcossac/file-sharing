"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MainLoader from "../App/MainLoader";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.replace("/");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <MainLoader />;
  }

  return <>{children}</>;
}
