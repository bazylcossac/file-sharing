"use client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

function Folder() {
  const { folderId } = useParams();
  return (
    <div>
      <div className="flex justify-between">
        <div>folder page {folderId}</div>
        <div>
          <Button variant="destructive">
            <RiDeleteBinLine />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Folder;
