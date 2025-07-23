"use client";
import { useSession } from "next-auth/react";
import React, { useMemo } from "react";
import Image from "next/image";
import UserDropdown from "./Header/UserDropdown";

function HeaderUser() {
  const session = useSession();
  const userData = useMemo(() => {
    return session.data?.user;
  }, [session]);

  /// testowa zmiana

  /// testowa zmiana z maina
  return (
    <div className="flex flex-row items-center">
      <div className="flex items-center gap-2 hover:bg-neutral-700 transition rounded-md px-2 py-1 cursor-pointer">
        <UserDropdown
          className="ml-2 bg-[#100a0e] border-none text-white"
          trigger={
            <div className="flex gap-2 ring-0 focus:ring-0 outline-none">
              {userData?.image ? (
                <Image
                  src={userData?.image}
                  alt="user image"
                  width={25}
                  height={25}
                  quality={100}
                  className="rounded-full"
                />
              ) : (
                <div className="rounded-full bg-primary font-semibold text-white text-xs size-6 flex items-center justify-center">
                  <p>{userData?.name![0]}</p>
                </div>
              )}
              <p>{userData?.name}</p>
            </div>
          }
        />
      </div>
      <p className="font-bold text-white/50 mx-2 hidden md:inline-block">/</p>

      <div className="flex items-center gap-2 hover:bg-neutral-700 transition rounded-md px-2 py-2 cursor-pointer text-xs">
        <p>Test Folder</p>
      </div>
    </div>
  );
}

export default HeaderUser;
