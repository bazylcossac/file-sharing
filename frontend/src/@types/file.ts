import z from "zod";

export const FileSchema = z.object({
  name: z.string(),
  secure: z.boolean(),
  size: z.number().positive().min(1),
  password: z
    .string()
    .min(5, { message: "common.createFile.passwordTooShort" })
    .optional(),
  sharedEmails: z.string().array().optional(),
  backgroundImage: z.string().url(),
});

export type FileCreateType = z.infer<typeof FileSchema>;

export const fileCreateInit: FileCreateType = {
  name: "",
  secure: false,
  size: 1,
  password: "",
  sharedEmails: [],
  backgroundImage: "",
};
