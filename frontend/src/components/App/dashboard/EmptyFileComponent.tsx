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
import { fileCreateInit, fileCreateSchema } from "@/constants/File/File";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
const FileComponent = () => {
  const [secureSwitch, setSecureSwitch] = useState(false);
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(fileCreateSchema),
    defaultValues: fileCreateInit,
  });

  const addFile = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className="">
      <Dialog>
        <DialogTrigger>
          <div className="bg-neutral-700/20 py-2 w-14 mb-4 flex items-center justify-center rounded-md cursor-pointer hover:bg-neutral-600/30 hover:text-neutral-200 transition">
            <FaFolderPlus className="text-neutral-300 " />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-[#2c2632]">
          <DialogHeader>
            <DialogTitle>{t("common.createFile.createNewSpace")}</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(addFile)}>
                <div>
                  <p>{t("common.createFile.spaceName")}</p>
                  <Input {...register("name")} />
                </div>
                <div>
                  <p>{t("common.createFile.maxSize")}</p>
                  <Input type="number" {...register("maxSize")} />
                  {errors?.maxSize && <p>{errors.maxSize.message}</p>}
                </div>
                <div>
                  <p>{t("common.createFile.file_image")}</p>
                  <Input type="text" {...register("backgroundImage")} />
                </div>
                <div>
                  <p>{t("common.createFile.secureSpace")}</p>
                  <p className="text-xs">*{t("common.createFile.optional")}</p>
                  <Switch
                    {...register("secure")}
                    checked={secureSwitch}
                    onCheckedChange={setSecureSwitch}
                  />
                  {secureSwitch && (
                    <div>
                      <p>{t("common.createFile.setPassword")}</p>
                      <Input type="password" />
                    </div>
                  )}
                </div>
                <Button>Submit</Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default FileComponent;
