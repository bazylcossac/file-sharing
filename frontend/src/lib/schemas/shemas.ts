import { z } from "zod";
// TODO  dodac wiadomosc z intla password: z.string().min(10, {message: }), 


export const loginSchema = z.strictObject({
  email: z.string().email(),
  password: z.string().min(10),
});
