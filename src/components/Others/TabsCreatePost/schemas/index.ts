import { z } from "zod";

export const FormSchema = z.object({
  cardLinks: z.object({
    links: z
      .array(
        z.object({
          link: z
            .string()
            .min(8, "O link precisa ter no mínimo 8 caracteres")
            .refine((link) => {
              return link.startsWith("https");
            }, "Use um link que comece com 'https' para garantir a segurança."),
        }),
      )
      .min(6, "Você deve cadastrar 6 links no mínimo")
      .default([]),

    partnerships: z
      .array(
        z.object({
          link: z
            .string()
            .min(8, "O link precisa ter no mínimo 8 caracteres")
            .refine((link) => {
              return link.startsWith("https");
            }, "Use um link que comece com 'https' para garantir a segurança."),
        }),
      )
      .min(1, "Você deve cadastrar 1 link no mínimo")
      .default([]),

    marketCap: z
      .string()
      .min(1, "Você deve cadastrar 1 link no mínimo")
      .refine((link) => {
        return link.startsWith("https");
      }, "Use um link que comece com 'https' para garantir a segurança.")
      .default(""),
  }),
});

export type FormData = z.infer<typeof FormSchema>;
