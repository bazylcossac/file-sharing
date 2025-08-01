import z from "zod";

export const fileCreateSchema = z.object({
  name: z.string(),
  secure: z.boolean(),
  maxSize: z.number(),
  password: z
    .string()
    .min(5, { message: "common.createFile.passwordTooShort" }),
  sharedPeople: z.string().array().optional(),
});

export type FileCreateType = z.infer<typeof fileCreateSchema>;

export const fileCreateInit: FileCreateType = {
  name: "",
  secure: false,
  maxSize: 0,
  password: "",
  sharedPeople: [],
};
