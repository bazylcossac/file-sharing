import React from "react";
import FileComponent from "@/components/App/dashboard/FileComponent";
import EmptyFileComponent from "@/components/App/dashboard/EmptyFileComponent";
import { FileType } from "@/@types/file";

const data: FileType[] = [
  {
    id: "123123",
    fileName: "Test File",
    elements: 13,
    size: 31,
    backgroundImage:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/grand-theft-auto-v-enhanced-scre-5b30d0ae-file-5b30d0a1.jpg.webp",
  },
  {
    id: "123123321",
    fileName: "Games Screens",
    elements: 42,
    size: 352,
    backgroundImage:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/black-myth-wukong-file-84439423e.jpg.webp",
  },
  {
    id: "123123",
    fileName: "Test File",
    elements: 13,
    size: 31,
    backgroundImage:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/grand-theft-auto-v-enhanced-scre-5b30d0ae-file-5b30d0a1.jpg.webp",
  },
  {
    id: "123123321",
    fileName: "Games Screens",
    elements: 42,
    size: 352,
    backgroundImage:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/black-myth-wukong-file-84439423e.jpg.webp",
  },
  {
    id: "123123",
    fileName: "Test File",
    elements: 13,
    size: 31,
    backgroundImage:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/grand-theft-auto-v-enhanced-scre-5b30d0ae-file-5b30d0a1.jpg.webp",
  },
  {
    id: "123123321",
    fileName: "Games Screens",
    elements: 42,
    size: 352,
    backgroundImage:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/black-myth-wukong-file-84439423e.jpg.webp",
  },
];

function page() {
  return (
    <div className="">
      <EmptyFileComponent />
      <div className="flex gap-2 flex-wrap w-full">
        {data.map((file: FileType) => (
          <FileComponent {...file} key={file.id} />
        ))}
      </div>
    </div>
  );
}

export default page;
