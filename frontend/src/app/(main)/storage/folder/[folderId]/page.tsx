"use client";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

function Folder() {
  const { folderId } = useParams();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <div>folder page {folderId}</div>
        <div>
          <Modal
            trigger={
              <div className="size-8 bg-destructive hover:bg-destructive/70 flex items-center justify-center rounded-sm cursor-pointer">
                <RiDeleteBinLine />
              </div>
            }
            open={open}
            setOpen={setOpen}
            title="test"
            description="test"
          ></Modal>
        </div>
      </div>
    </div>
  );
}

export default Folder;
