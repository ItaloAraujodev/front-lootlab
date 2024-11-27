import { z } from "zod";

export const FormSchema = z.object({
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
    .min(6, "Você deve cadastrar 6 links no mínimo"),
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
    .min(6, "Você deve cadastrar 6 links no mínimo"),
  marketCap: z.string().refine((link) => {
    return link.startsWith("https");
  }, "Use um link que comece com 'https' para garantir a segurança."),
});

export type FormData = z.infer<typeof FormSchema>;
