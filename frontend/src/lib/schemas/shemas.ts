import { z } from "zod";
// TODO  dodac wiadomosc z intla password: z.string().min(10, {message: }),

export const loginSchema = z.strictObject({
  email: z.string().email(),
  password: z
    .string()
    .min(10, { message: "login_page.Errors.Password.TooShort" }),
});

export const signInSchema = z.strictObject({
  email: z.string().email(),
  name: z.string().min(5, { message: "login_page.Errors.Name.TooShort" }),
  password: z
    .string()
    .min(10, { message: "login_page.Errors.Password.TooShort" }),
});
