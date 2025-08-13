"use client";

import { PropsWithChildren, ReactElement, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

type ModalProps = {
  title?: string;
  description?: string;
  open: boolean;
  setOpen: () => void;
  onClose: () => void;
  onClick: () => void;

  trigger: ReactElement | ReactNode;
};

const Modal = ({
  setOpen,
  open,
  trigger,
  title,
  description,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger>
        <div className="bg-neutral-700/20 py-2 w-14 mb-4 flex items-center justify-center rounded-md cursor-pointer hover:bg-neutral-600/30 hover:text-neutral-200 transition">
          {trigger}
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#2c2632]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
