import { FileType } from "@/@types/file";
import React, { useMemo } from "react";
import Image from "next/image";

const FileComponent = ({
  fileName,
  elements,
  size,
  backgroundImage,
}: FileType) => {
  const imageUrl = useMemo(
    () =>
      backgroundImage ||
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/grand-theft-auto-v-enhanced-scre-5b30d0ae-file-5b30d0a1.jpg.webp",
    [backgroundImage]
  );

  return (
    <div className="relative w-fit hover:scale-102 transition cursor-pointer">
      <Image
        src={imageUrl}
        width={200}
        height={400}
        alt="folder background image"
        className="relative rounded-t-md"
        quality={100}
      />
      <div className="absolute top-0  bg-black/50 w-full rounded-t-md">
        <p className="text-xs font-semibold m-1">{fileName}</p>
      </div>
      <div className="absolute left-0 w-full bg-primary rounded-b-md text-white h-18 flex flex-col">
        <div className="m-1">
          <p className="text-xs">Elements: {elements}</p>
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
