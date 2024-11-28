import { z } from "zod";

// Esquema para validação de um Link
const LinkSchema = z.object({
  linkUrl: z
    .string()
    .url("URL inválida")
    .refine(
      (link) => link.startsWith("https"),
      "Por segurança, o link deve iniciar com https.",
    )
    .default(""),
});

// Esquema para validação de ProjectFeatures
const ProjectFeatureSchema = z.object({
  title: z.string().min(1, "O título da feature é obrigatório"),
  isFeature: z.boolean(),
});

// Esquema para validação de LaunchInfo
const LaunchInfoSchema = z.object({
  launchDate: z.string().min(1, "A data de lançamento é obrigatória"),
  marketCap: z.number().nonnegative("O market cap deve ser um número positivo"),
  currentSupply: z.string().min(1, "A oferta atual é obrigatória"),
  totalSupply: z
    .number()
    .positive("O total supply deve ser um número positivo"),
  privateSale: z
    .number()
    .nonnegative("O valor da venda privada deve ser positivo"),
  privateSaleQty: z
    .number()
    .nonnegative("A quantidade da venda privada deve ser positiva"),
  publicSale: z
    .number()
    .nonnegative("O valor da venda pública deve ser positivo"),
  publicSaleQty: z
    .number()
    .nonnegative("A quantidade da venda pública deve ser positiva"),
});

// Esquema para validação de Partnership
const PartnershipSchema = z.object({
  // name: z.string().min(1, "O nome da parceria é obrigatório"),
  // type: z.string().min(1, "O tipo da parceria é obrigatório"),
  linkUrl: z
    .string()
    .url("URL da parceria inválida")
    .refine(
      (link) => link.startsWith("https"),
      "Por segurança, o link deve iniciar com https.",
    )
    .default(""),
});

// Esquema principal para validação do Post
export const FormSchema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  marketLink: z
    .string()
    .url("URL de mercado inválida")
    .refine(
      (link) => link.startsWith("https"),
      "Por segurança, o link deve iniciar com https.",
    )
    .default(""),
  score: z.number().optional(),
  investment: z.string().optional(),
  token: z.string().min(1, "O token é obrigatório"),
  network: z.string().min(1, "A rede é obrigatória"),
  authorId: z.string().min(1, "O ID do autor é obrigatório"),
  comment_author: z.string().min(1, "O autor do comentário é obrigatório"),
  links: z
    .array(LinkSchema)
    .min(6, "Você deve cadastrar 6 links no mínimo")
    .default([]),
  projectFeatures: z.array(ProjectFeatureSchema).optional(),
  launchInfo: LaunchInfoSchema,
  partnership: z
    .array(PartnershipSchema)
    .min(1, "Você deve cadastrar 1 link no mínimo")
    .default([]),
});

export type FormData = z.infer<typeof FormSchema>;
