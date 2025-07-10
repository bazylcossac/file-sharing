import { z } from "zod";

export const loginSchema = z.strictObject({
  email: z.string().email(),
  password: z.string().min(5),
});
