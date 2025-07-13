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
  console.log(session.data?.user);

  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated" || session.status === "loading") {
      router.replace("/");
    } else {
      router.replace("/dashboard");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <MainLoader />;
  }

  return <>{children}</>;
}
