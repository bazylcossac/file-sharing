"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/lib/schemas/shemas";
import { cn } from "@/lib/utils";

import Link from "next/link";

type SignUpData = {
  email: string;
  name: string;
  password: string;
};

// TODO dodac validacje na polach, sprawdzania emaila  czy jest taki w bazie danmych na requescie

export default function Home() {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: zodResolver(signInSchema) });

  const submitFunction = (data: SignUpData) => {
    const watchPassword = watch("password");
    const watchEmail = watch("email");
    console.log(data);
    console.log(watchPassword);
    console.log(watchEmail);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className="bg-[#424242] border-1 border-[#8c5cff] rounded-md h-[600px] w-[800px]"
        data-testid="login-page"
      >
        <div className="flex items-center flex-col gap-4 mt-6">
          <p className="font-bold text-xl">File Sharing</p>
          <p>{t("login_page.SignUp")}</p>
        </div>
        <form
          className="flex items-center flex-col justify-center gap-8 mt-14"
          onSubmit={handleSubmit(submitFunction)}
        >
          <div>
            <label
              className={cn("text-xs", {
                "text-red-500": errors.email,
              })}
              htmlFor="email-input"
            >
              {t("login_page.Email")}
            </label>
            <Input
              className={cn(
                "w-[400px]  focus:ring-0 focus-visible:ring-0 border-[#8c5cff] focus-visible:border-[#715e9e] transition",
                {
                  "border-1 border-red-500 transition focus:border-red-500 focus-visible:border-red-300":
                    errors.email,
                }
              )}
              placeholder="example@gmail.com"
              type="email"
              id="email-input"
              {...register("email", { required: true })}
              data-testid="email-login-input"
            />
            <p className="text-xs mt-1 text-red-300  h-2">
              {errors.email && t("login_page.Errors.Email.InvalidEmail")}
            </p>
          </div>
          <div>
            <label
              className={cn("text-xs", {
                "text-red-500": errors.name,
              })}
              htmlFor="name-input"
            >
              {t("login_page.Name")}
            </label>
            <Input
              className={cn(
                "w-[400px]  focus:ring-0 focus-visible:ring-0 border-[#8c5cff] focus-visible:border-[#715e9e] transition",
                {
                  "border-1 border-red-500 transition focus:border-red-500 focus-visible:border-red-300":
                    errors.name,
                }
              )}
              placeholder="John Doe"
              type="text"
              id="name-input"
              {...register("name", { required: true })}
              data-testid="name-login-input"
            />
            <p className="text-xs mt-1 text-red-300 h-2">
              {errors.name
                ? errors.name?.message
                  ? t("login_page.Errors.Name.TooShort")
                  : t("login_page.Errors.Name.InvalidName")
                : ""}
            </p>
          </div>
          <div>
            <label
              className={cn("text-xs", {
                "text-red-500": errors.password,
              })}
              htmlFor="password-input"
            >
              {t("login_page.Password")}
            </label>
            <Input
              className={cn(
                "w-[400px] focus:ring-0 focus-visible:ring-0 border-[#8c5cff] focus-visible:border-[#715e9e] transition",
                {
                  "border-1 border-red-500 focus:border-red-500 focus-visible:border-red-300 transition":
                    errors.password,
                }
              )}
              placeholder={t("login_page.YourPassword")}
              type="password"
              id="password-input"
              {...register("password", { required: true })}
              data-testid="password-login-input"
            />
            <p className="text-xs mt-1 text-red-300  h-2">
              {errors.password && t(errors.password.message!)}
            </p>
          </div>
          <Button
            className="border-[#8c5cff] border-1 cursor-pointer"
            data-testid="login-button"
          >
            <p>{t("login_page.SignUp")}</p>
          </Button>
        </form>
        <p className="text-right mt-9 text-xs mr-2 underline">
          <Link href="/">{t("login_page.HaveAnAccount")}</Link>
        </p>
      </div>
    </div>
  );
}
