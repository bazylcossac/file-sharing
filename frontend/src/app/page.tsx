"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/schemas/shemas";

// TODO dodac validacje na polach, sprawdzania emaila na wpisywaniu czy jest taki w bazie danmych z debouncem

export default function Home() {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: zodResolver(loginSchema) });
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
        <form className="flex items-center flex-col h-full justify-center gap-8">
          <div>
            <label className="text-xs" htmlFor="email-input">
              E-mail
            </label>
            <Input
              className="w-[400px]"
              placeholder="example@gmail.com"
              type="email"
              id="email-input"
              {...register("email")}
              data-testid="email-login-input"
              required
            />
          </div>
          <div>
            <label className="text-xs" htmlFor="password-input">
              Password
            </label>
            <Input
              className="w-[400px]"
              placeholder="Your password"
              type="password"
              id="password-input"
              {...register("password")}
              data-testid="password-login-input"
              required
            />
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
