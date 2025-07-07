"use client";
import Link from "next/link";
// import React, { useEffect, useState } from "react";
import React from "react";

// import SearchInput from "./SearchInput";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function Navbar() {
  //   const [shortCut, setShortcut] = useState<"CTRL" | "⌘" | "">("");

  const pathName = usePathname();
  const t = useTranslations();
  //   const isDesktop = useMediaQuery();

  //   useEffect(() => {
  //     const system = navigator.userAgent.toLowerCase();
  //     if (system.includes("win")) {
  //       setShortcut("CTRL");
  //     }
  //     if (system.includes("mac")) {
  //       setShortcut("⌘");
  //     }
  //   }, []);

  //   if (!shortCut) return <NavbarSkeleton />;

  //   if (!isDesktop) return null;

  //   if (isDesktop) {
  return (
    <nav className="min-w-[200px] h-full overflow-y-hidden mt-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,

          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="h-full"
      >
        <div className="mx-1.75">
          {/* <SearchInput shortCut={shortCut} /> */}

          <div className="mb-6">
            <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
              GET STARTED
            </h2>
            <ul className="flex flex-col [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
              <Link
                href="/dashboard"
                className={cn("text-white/70", {
                  "bg-[#8c5cff] text-white": pathName === "/dashboard",
                })}
              >
                {t("dashboard_page.navbar.HomePage")}
              </Link>
            </ul>
          </div>

          {/* <UserNavbar /> */}

          <div className="mt-6">
            <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
              STORAGE
            </h2>
            <ul className="flex flex-col [&>*]:m-0.25 [&>*]:text-white/70 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
              <Link
                href="/dashboard/tokens"
                className={cn("text-white/70 ", {
                  "bg-[#8c5cff] text-white": pathName === "/dashboard/tokens",
                })}
              >
                Files
              </Link>

              <Link
                href="/dashboard"
                className={cn("text-white/70 ", {
                  "bg-[#8c5cff] text-white": pathName === "/dashboard/costs",
                })}
              >
                Shared files
              </Link>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* {showSearchBarDialog && <SearchInputDialog />} */}
    </nav>
  );
}
// }
export default Navbar;
