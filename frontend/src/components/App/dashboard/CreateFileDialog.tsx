"use client";
import React, { useState } from "react";
import { FaFolderPlus } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { useMutateAddUserFiles } from "@/hooks/components/dashboard/mutateUserFolders";
import { Folder, fileCreateInit } from "@/@types/Folder";
import { toast } from "sonner";

const CreateFileDialog = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  const mutation = useMutateAddUserFiles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Folder),
    defaultValues: fileCreateInit,
  });

  const onSubmit = (data: unknown) => {
    const parsedData = Folder.safeParse(data);
    if (!parsedData.success) {
      toast.error(t("common.createFile.toasts.error"));
      setOpen(false);
      return;
    }
    mutation.mutate(data);
    toast.success(t("common.createFile.toasts.success"));
    setOpen(false);
  };

  return (
    <div>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger>
          <div className="bg-neutral-700/20 py-2 w-14 mb-4 flex items-center justify-center rounded-md cursor-pointer hover:bg-neutral-600/30 hover:text-neutral-200 transition">
            <FaFolderPlus className="text-neutral-300 " />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-[#2c2632]">
          <DialogHeader>
            <DialogTitle>
              {t("common.file.createFile.createNewSpace")}
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div>
              <p className="py-2">{t("common.file.createFile.spaceName")}</p>
              <Input {...register("name")} />
              {errors?.name && (
                <p className="text-sm py-2 text-accent">
                  {t(errors.name.message!)}
                </p>
              )}
            </div>
            <div>
              <p className="py-2">{t("common.file.createFile.file_image")}</p>
              <Input type="text" {...register("backgroundImage")} />
              {errors?.backgroundImage && (
                <p className="text-sm py-2 text-accent">
                  {t(errors.backgroundImage.message!)}
                </p>
              )}
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default CreateFileDialog;
