"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/schemas/shemas";
import { cn } from "@/lib/utils";

// TODO dodac validacje na polach, sprawdzania emaila  czy jest taki w bazie danmych

export default function Home() {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: zodResolver(loginSchema) });

  const watchPassword = watch("password");
  const watchEmail = watch("email");

  const submitFunction = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className="bg-[#424242] border-1 border-[#8c5cff] rounded-md h-[600px] w-[800px]"
        data-testid="login-page"
      >
        <div className="flex items-center flex-col gap-4 mt-2">
          <p className="font-bold text-xl">File Sharing</p>
          <p>{t("login_page.Login")}</p>
        </div>
        <form
          className="flex items-center flex-col h-full justify-center gap-8"
          onSubmit={handleSubmit(submitFunction)}
        >
          <div>
            <label className="text-xs" htmlFor="email-input">
              E-mail
            </label>
            <Input
              className={cn(
                "w-[400px] focus:border-[#8c5cff] focus:outline-[#8c5cff] focus:ring-0 focus-visible:ring-0",
                {
                  "border-1 border-red-500": errors.email,
                }
              )}
              placeholder="example@gmail.com"
              type="email"
              id="email-input"
              {...register("email", { required: true })}
              data-testid="email-login-input"
            />
            {errors.email && <p>Invalid email</p>}
          </div>
          <div>
            <label
              className={cn("text-xs", {
                "text-red-500": errors.password,
              })}
              htmlFor="password-input"
            >
              Password
            </label>
            <Input
              className={cn(
                "w-[400px] focus:border-[#8c5cff] focus:outline-[#8c5cff] focus:ring-0 focus-visible:ring-0",
                {
                  "border-1 border-red-500": errors.password,
                }
              )}
              placeholder="Your password"
              type="password"
              id="password-input"
              {...register("password", { required: true })}
              data-testid="password-login-input"
            />
            {errors.password && (
              <p className="text-xs mt-1 text-red-300">
                {t(errors.password.message!)}
              </p>
            )}
          </div>
          <Button
            className="border-[#8c5cff] border-1 cursor-pointer"
            data-testid="login-button"
          >
            <p>{t("login_page.Login")}</p>
          </Button>
        </form>
      </div>
    </div>
  );
}
