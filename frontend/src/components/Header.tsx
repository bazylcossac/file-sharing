"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import HeaderUser from "./HeaderUser";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

function Header() {
  const t = useTranslations();
  const session = useSession();

  const userData = useMemo(() => {
    return session.data?.user;
  }, [session]);

  return (
    <>
      <header className="h-full flex items-center justify-between mx-4">
        <HeaderUser />
        <div className="flex flex-row items-center gap-4">
          <h1 className="font-bold">
            Drop<span className="text-primary">Thing</span>
          </h1>
        </div>
      </header>
    </>
  );
}
export default Header;
