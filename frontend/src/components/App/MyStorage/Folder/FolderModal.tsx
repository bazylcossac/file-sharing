"use client";

import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

type FolderModalProps = {
  folderName: string;
};

const FolderModal = ({ folderName }: FolderModalProps) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      {" "}
      <Modal
        trigger={
          <div className="size-8 bg-destructive hover:bg-destructive/70 flex items-center justify-center rounded-sm cursor-pointer">
            <RiDeleteBinLine />
          </div>
        }
        open={open}
        setOpen={setOpen}
        title={`Do you really want to delete`}
        titleKeyWord={`${folderName}?`}
        description="test"
      >
        <div>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex justify-between items-center mt-4">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              disabled={!(inputValue === folderName)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FolderModal;
