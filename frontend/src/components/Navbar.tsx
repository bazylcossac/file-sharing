"use client";
import Link from "next/link";
// import React, { useEffect, useState } from "react";
import React from "react";
import { FaHome, FaClock } from "react-icons/fa";
import { MdStorage } from "react-icons/md";
import {
  RiFolderSharedFill,
  RiSpam2Fill,
  RiDeleteBin2Fill,
} from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import UsedSpaceBar from "./App/Navbar/UsedSpaceBar";

function Navbar() {
  const pathName = usePathname();
  const t = useTranslations();

  return (
    <nav className="min-w-[220px] h-full overflow-y-hidden mt-2 ">
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
            <ul className="flex flex-col [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-accent [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer gap-1">
              <Link
                href="/dashboard"
                className={cn("text-white/70 flex items-center gap-1", {
                  "bg-primary text-white": pathName === "/dashboard",
                })}
              >
                <FaHome />
                {t("dashboard_page.navbar.HomePage")}
              </Link>

              <Link
                href="/storage"
                className={cn("text-white/70 flex items-center gap-1 ", {
                  "bg-primary text-white": pathName === "/storage",
                })}
              >
                <MdStorage />
                {t("dashboard_page.navbar.MyStorage")}
              </Link>
            </ul>
          </div>

          {/* <UserNavbar /> */}

          <div className="mt-4">
            <ul className="flex flex-col [&>*]:m-0.25 [&>*]:text-white/70 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-accent [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer gap-1">
              <Link
                href="/shared"
                className={cn("text-white/70 flex items-center gap-1 ", {
                  "bg-primary text-white": pathName === "/shared",
                })}
              >
                <RiFolderSharedFill />
                {t("dashboard_page.navbar.SharedWithMe")}
              </Link>
              <Link
                href="/latest"
                className={cn("text-white/70 flex items-center gap-1 ", {
                  "bg-primary text-white": pathName === "/latest",
                })}
              >
                <FaClock />
                {t("dashboard_page.navbar.Latest")}
              </Link>
              <Link
                href="/starred"
                className={cn("text-white/70 flex items-center gap-1 ", {
                  "bg-primary text-white": pathName === "/starred",
                })}
              >
                <FaStar />
                {t("dashboard_page.navbar.Starred")}
              </Link>
            </ul>
          </div>

          <div className="mt-4">
            <ul className="flex flex-col [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-accent [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer gap-1">
              <Link
                href="/spam"
                className={cn("text-white/70 flex items-center gap-1", {
                  "bg-primary text-white ": pathName === "/spam",
                })}
              >
                <RiSpam2Fill />
                {t("dashboard_page.navbar.Spam")}
              </Link>

              <Link
                href="/bin"
                className={cn("text-white/70 flex items-center gap-1", {
                  "bg-primary text-white": pathName === "/bin",
                })}
              >
                <RiDeleteBin2Fill />
                {t("dashboard_page.navbar.Bin")}
              </Link>
            </ul>
          </div>
          <div className="ml-4 mt-4">
            <p className="text-xs mb-2">
              {t("dashboard_page.navbar.UsedStorage")}
            </p>
            <UsedSpaceBar />
            <Link
              href="/dashboard"
              className="text-xs mt-4 text-primary underline cursor-pointer hover:text-accent"
            >
              {t("dashboard_page.navbar.need_more_space")}
            </Link>
          </div>
        </div>
      </motion.div>

      {/* {showSearchBarDialog && <SearchInputDialog />} */}
    </nav>
  );
}
// }
export default Navbar;
