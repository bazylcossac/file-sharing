"use client";

import {
  Dispatch,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";

type ModalProps = {
  title?: string;
  description?: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  trigger: ReactElement | ReactNode;
  triggerStyles?: string;
  descriptionStyles?: string;
  titleKeyWord?: string;
};

const Modal = ({
  setOpen,
  open,
  trigger,
  title,
  description,
  children,
  triggerStyles,
  descriptionStyles,
  titleKeyWord,
}: PropsWithChildren<ModalProps>) => {
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="bg-[#2c2632]">
        <DialogHeader>
          <DialogTitle className={cn("text-lg font-extrabold", triggerStyles)}>
            <div className="flex items-center gap-1">
              {title} <p className="text-accent text-xl">{titleKeyWord}</p>
            </div>
          </DialogTitle>
          {description && (
            <DialogDescription className={cn("", descriptionStyles)}>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
