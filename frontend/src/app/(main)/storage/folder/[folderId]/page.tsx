"use client";
import FolderModal from "@/components/App/MyStorage/Folder/FolderModal";

import { useParams } from "next/navigation";
import React from "react";

function Folder() {
  const { folderId } = useParams();

  return (
    <div>
      <div className="flex justify-between">
        <div>folder page {folderId}</div>
        <div>
          <FolderModal folderName="test folder" />
        </div>
      </div>
    </div>
  );
}

export default Folder;
