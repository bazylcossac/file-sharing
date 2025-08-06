"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { FileType } from "@/@types/file";

const FileComponent = ({ id, name, size, backgroundImage }: FileType) => {
  const router = useRouter();
  const imageUrl = useMemo(
    () =>
      backgroundImage ||
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/grand-theft-auto-v-enhanced-scre-5b30d0ae-file-5b30d0a1.jpg.webp",
    [backgroundImage]
  );

  const navigateToFile = () => router.push(`storage/folder/${id}`);
  const t = useTranslations();
  return (
    <div
      className="hover:brightness-80 transition cursor-pointer flex flex-col gap-1 w-auto"
      onClick={navigateToFile}
    >
      <Image
        src={imageUrl}
        width={200}
        height={100}
        alt="folder background image"
        className="rounded-t-md object-cover w-full h-full "
        quality={100}
        priority
      />
      <div className=" top-0  bg-black/50 w-full rounded-md">
        <p className="text-xs font-semibold p-2">{name}</p>
      </div>
      <div className="w-full bg-primary rounded-md text-white h-18 flex flex-col">
        <div className="m-1">
          <p className="text-xs">
            {t("common.file.elements")}: {10}
          </p>
          <p className="text-xs">{size} MB</p>
        </div>
        <div className="text-right mt-auto m-1">
          <p className="text-xs">28%</p>
        </div>
      </div>
    </div>
  );
};
export default FileComponent;
