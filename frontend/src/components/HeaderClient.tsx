import { useSession } from "next-auth/react";
import React, { useMemo } from "react";
import Image from "next/image";

function HeaderClient() {
  const session = useSession();
  const userData = useMemo(() => {
    return session.data?.user;
  }, [session]);

  return (
    <div className="flex flex-row items-center">
      <div className="flex items-center gap-2 hover:bg-neutral-700 transition rounded-md px-2 py-1 cursor-pointer">
        {/* {!isDesktop && <MobileNavbar />} */}
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
          <div className="rounded-full bg-[#8c5cff] font-semibold text-white text-xs size-6 flex items-center justify-center">
            <p>{userData?.name![0]}</p>
          </div>
        )}
        <p className="text-xs">{userData?.name}</p>
      </div>
      <p className="font-bold text-white/50 mx-2 hidden md:inline-block">/</p>
    </div>
  );
}

export default HeaderClient;
