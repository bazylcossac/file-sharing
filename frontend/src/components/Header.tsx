"use client";
import Link from "next/link";
import Image from "next/image";
import { Suspense, useMemo } from "react";
import HeaderClient from "./HeaderClient";
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
        <Suspense fallback={<div>Loading...</div>}>
          <HeaderClient />
        </Suspense>
        <div className="flex flex-row items-center gap-4">
          {/* <Link
            href="/dashboard/tokens"
            className="text-[11px] bg-white px-2 py-1 rounded-md text-black font-semibold hover:bg-white/70 transition hidden md:inline-block "
          >
            Buy More Space
          </Link> */}
          {/* <p className="font-bold mx-1 text-white/50">/</p> */}

          {/* <IoSettingsOutline className="font-bold text-white/70 hover:text-white cursor-pointer hidden md:inline-block" /> */}
        </div>
      </header>
    </>
  );
}
export default Header;
