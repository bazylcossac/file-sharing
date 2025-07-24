import z from "zod";

export const FileSchema = z.object({
  id: z.string(),
  fileName: z.string(),
  elements: z.number(),
  size: z.number(),
  backgroundImage: z.string().optional(),
});

export type FileType = z.infer<typeof FileSchema>;
