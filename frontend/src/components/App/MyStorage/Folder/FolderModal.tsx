"use client";

import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

type FolderModalProps = {
  folderName: string;
};

const FolderModal = ({ folderName }: FolderModalProps) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const t = useTranslations();

  const deleteFolder = () => {};
  
  return (
    <>
      <Modal
        trigger={
          <div className="size-8 bg-destructive hover:bg-destructive/70 flex items-center justify-center rounded-sm cursor-pointer">
            <RiDeleteBinLine />
          </div>
        }
        open={open}
        setOpen={setOpen}
        title={`${t("common.file.deleteFile.title")}`}
        titleKeyWord={`${folderName}?`}
        description={`${t("common.file.deleteFile.description")}`}
      >
        <div>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex justify-between items-center mt-4">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              {t("common.cancel")}
            </Button>
            <Button
              onClick={deleteFolder}
              variant="destructive"
              disabled={!(inputValue === folderName)}
            >
              {t("common.delete")}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FolderModal;
