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
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useMutateAddUserFiles } from "@/hooks/components/dashboard/mutateUserFiles";
import { fileCreateInit, FileSchema } from "@/@types/file";

const FileComponent = () => {
  const [secureSwitch, setSecureSwitch] = useState(false);
  const t = useTranslations();
  const mutation = useMutateAddUserFiles();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FileSchema),
    defaultValues: fileCreateInit,
  });

  // Synchronizuj secureSwitch z polem secure w formularzu
  React.useEffect(() => {
    setValue("secure", secureSwitch);
    if (!secureSwitch) setValue("password", undefined);
  }, [secureSwitch, setValue]);

  const onSubmit = (data: any) => {
    // Jeśli secureSwitch jest aktywny, password musi być stringiem
    if (!secureSwitch) {
      delete data.password;
    }
    mutation.mutate(data);
  };

  return (
    <div>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <p>{t("common.createFile.spaceName")}</p>
                  <Input {...register("name")} />
                  {errors?.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                  <p>{t("common.createFile.maxSize")}</p>
                  <Input
                    type="number"
                    {...register("size", { valueAsNumber: true })}
                  />
                  {errors?.size && <p>{errors.size.message}</p>}
                </div>
                <div>
                  <p>{t("common.createFile.file_image")}</p>
                  <Input type="text" {...register("backgroundImage")} />
                  {errors?.backgroundImage && (
                    <p>{errors.backgroundImage.message}</p>
                  )}
                </div>
                <div>
                  <p>{t("common.createFile.secureSpace")}</p>
                  <p className="text-xs">*{t("common.createFile.optional")}</p>
                  <Switch
                    checked={secureSwitch}
                    onCheckedChange={setSecureSwitch}
                  />
                  {secureSwitch && (
                    <div>
                      <p>{t("common.createFile.setPassword")}</p>
                      <Input type="password" {...register("password")} />
                      {errors?.password && <p>{errors.password.message}</p>}
                    </div>
                  )}
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default FileComponent;
