import React from "react";
import { FaFolderPlus } from "react-icons/fa";
const FileComponent = () => {
  return (
    <div className="bg-neutral-700/20 size-24 flex items-center justify-center rounded-md cursor-pointer hover:bg-neutral-600/30 hover:text-neutral-200 transition">
      <FaFolderPlus className="text-neutral-300" />
    </div>
  );
};
export default FileComponent;
