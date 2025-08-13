"use client";

import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const FolderModal = () => {
  const [open, setOpen] = useState(false);
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
        title="test"
        description="test"
      >
        <div className="flex justify-between items-center">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </Modal>
    </>
  );
};

export default FolderModal;
