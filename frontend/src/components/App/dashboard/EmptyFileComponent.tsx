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
import { fileCreateInit, fileCreateSchema } from "@/constants/File/FileCreate";
import { Switch } from "@/components/ui/switch";
const FileComponent = () => {
  const [secureSwitch, setSecureSwitch] = useState(false);
  const t = useTranslations();
  const { register } = useForm({
    resolver: zodResolver(fileCreateSchema),
    defaultValues: fileCreateInit,
  });
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
              <div>
                <p>{t("common.createFile.spaceName")}</p>
                <Input {...register("name")} />
              </div>
              <div>
                <p>{t("common.createFile.maxSize")}</p>
                <Input type="number" {...register("maxSize")} />
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
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default FileComponent;
