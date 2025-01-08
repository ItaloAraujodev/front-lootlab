import { z } from "zod";

export const formFilters = z.object({
  search: z.string().optional().default(""),
  filter: z
    .enum(["recent", "oldest", "order", "all"])
    .optional()
    .default("all"),
});
export type FormDataFilters = z.infer<typeof formFilters>;
