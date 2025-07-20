"use client";
import Link from "next/link";
// import React, { useEffect, useState } from "react";
import React from "react";

// import SearchInput from "./SearchInput";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

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
    <nav className="min-w-[200px] h-full overflow-y-hidden mt-2 ">
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

          <div className="mb-4">
            <ul className="flex flex-col [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
              <Link
                href="/dashboard"
                className={cn("text-white/70", {
                  "bg-[#8c5cff] text-white": pathName === "/dashboard",
                })}
              >
                {t("dashboard_page.navbar.HomePage")}
              </Link>

              <Link
                href="/disc"
                className={cn("text-white/70 ", {
                  "bg-[#8c5cff] text-white": pathName === "/disc",
                })}
              >
                {t("dashboard_page.navbar.MyStorage")}
              </Link>
            </ul>
          </div>

          {/* <UserNavbar /> */}

          <div className="mt-4">
            <ul className="flex flex-col [&>*]:m-0.25 [&>*]:text-white/70 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
              <Link
                href="/shared"
                className={cn("text-white/70 ", {
                  "bg-[#8c5cff] text-white": pathName === "/shared",
                })}
              >
                {t("dashboard_page.navbar.SharedWithMe")}
              </Link>
              <Link
                href="/latest"
                className={cn("text-white/70 ", {
                  "bg-[#8c5cff] text-white": pathName === "/latest",
                })}
              >
                {t("dashboard_page.navbar.Latest")}
              </Link>
              <Link
                href="/starred"
                className={cn("text-white/70 ", {
                  "bg-[#8c5cff] text-white": pathName === "/starred",
                })}
              >
                {t("dashboard_page.navbar.Starred")}
              </Link>
            </ul>
          </div>

          <div className="mt-4">
            <ul className="flex flex-col [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
              <Link
                href="/spam"
                className={cn("text-white/70", {
                  "bg-[#8c5cff] text-white ": pathName === "/spam",
                })}
              >
                {t("dashboard_page.navbar.Spam")}
              </Link>

              <Link
                href="/bin"
                className={cn("text-white/70 ", {
                  "bg-[#8c5cff] text-white": pathName === "/bin",
                })}
              >
                {t("dashboard_page.navbar.Bin")}
              </Link>
            </ul>
          </div>
          <div className="ml-4 mt-4">
            <p className="text-xs mb-2">
              {t("dashboard_page.navbar.UsedStorage")}
            </p>
            <Progress value={70} className="bg-neutral-900" />
            <p className="text-xs font-bold mt-2">8.23GB / 10.00GB</p>
            <Button
              variant="secondary"
              size="sm"
              className="text-xs mt-4 cursor-pointer"
            >
              {t("header.buy_space")}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* {showSearchBarDialog && <SearchInputDialog />} */}
    </nav>
  );
}
// }
export default Navbar;
