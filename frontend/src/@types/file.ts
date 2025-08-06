import z from "zod";

export const FileCreateSchema = z.object({
  name: z.string(),
  secure: z.boolean(),
  size: z.bigint().positive(),
  password: z
    .string()
    .min(5, { message: "common.createFile.passwordTooShort" })
    .nullable(),
  sharedEmails: z.string().array(),
  backgroundImage: z.string().url(),
});

export const UserFileData = z.object({
  id: z.string(),
  userId: z.string(),
});

export const FileSchema = FileCreateSchema.merge(UserFileData);

export type FileCreateType = z.infer<typeof FileCreateSchema>;

export type FileType = z.infer<typeof FileSchema>;

export const fileCreateInit: FileCreateType = {
  name: "",
  secure: false,
  size: 100n,
  password: "",
  sharedEmails: [],
  backgroundImage: "",
};
