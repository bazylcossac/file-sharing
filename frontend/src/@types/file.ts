import z from "zod";

export const File = z.object({
  name: z.string(),
  secure: z.boolean().optional(),
  size: z.bigint().positive().optional(),
  password: z.string().nullable().optional(),
  sharedEmails: z.string().array().optional(),
  backgroundImage: z.string().url(),
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
