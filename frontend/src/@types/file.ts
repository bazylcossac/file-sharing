import z from "zod";

export const File = z.object({
  name: z
    .string({ message: "common.createFile.errors.invalid_name" })
    .min(1, { message: "common.createFile.errors.name_too_short" }),
  secure: z.boolean().nullable().optional(),
  size: z.bigint().positive().nullable().optional(),
  password: z.string().nullable().optional(),
  sharedEmails: z.string().array().optional(),
  backgroundImage: z
    .string()
    .url({ message: "common.createFile.errors.invalid_url" }),
});

export const UserFileData = z.object({
  id: z.string(),
  userId: z.string(),
});

export const FileSchema = File.merge(UserFileData);

export type FileCreateType = z.infer<typeof File>;

export type FileType = z.infer<typeof FileSchema>;

export const fileCreateInit: FileCreateType = {
  name: "",
  secure: false,
  size: 100n,
  password: "",
  sharedEmails: [],
  backgroundImage: "",
};
