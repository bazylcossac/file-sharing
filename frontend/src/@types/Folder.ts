import z from "zod";

export const Folder = z.object({
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

export const FolderSchema = Folder.merge(UserFileData);

export type FolderCreateType = z.infer<typeof Folder>;

export type FolderType = z.infer<typeof FolderSchema>;

export const fileCreateInit: FolderCreateType = {
  name: "",
  secure: false,
  size: 100n,
  password: "",
  sharedEmails: [],
  backgroundImage: "",
};
