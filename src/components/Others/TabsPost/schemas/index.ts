import { z } from "zod";

const LinkSchema = z.object({
  url: z.string().url("URL inválida").optional(),
});

const ProjectFeatureSchema = z.object({
  title: z.string().optional(),
  isFeature: z.boolean().optional(),
});

const LaunchInfoSchema = z.object({
  launchDate: z.date({ message: "A data do Launch é obrigatória" }),
  marketCap: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Marekt Cap deve ser positivo"),
  currentSupply: z
    .string()
    .min(1, { message: "O current supply é alto, médio ou baixo" })
    .default(" "),
  totalSupply: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Total Supply deve ser positivo"),
  privateSale: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Private Sale deve ser positivo"),
  publicSale: z.coerce

    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Public Sale deve ser positivo"),
});

// Esquema para validação de Genero
const Genre = z.object({
  name: z.string(),
});

const PartnershipSchema = z.object({
  type: z.string().optional(),
  link_url: z.string().url("URL da parceria inválida").optional(),
});

export const FormSchema = z.object({
  title: z.string().min(1, "O Nome do Jogo é obrigatório"),
  market_link: z
    .string()
    .url("URL de mercado inválida")
    .refine(
      (link) => link.startsWith("https"),
      "Por segurança, o link deve iniciar com https",
    ),
  score: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Public Sale deve ser positivo")
    .optional(),
  investment: z.string().optional(),
  network: z.string().min(1, "A rede é obrigatória"),
  token: z.string().min(1, "O token é obrigatório"),
  comment_author: z.string().min(1, "O comentário do autor é obrigatório"),
  file: z
    .instanceof(globalThis.FileList, { message: "Escolha um arquivo valido" })
    .refine((file) => file.length, {
      message: "Escolha um arquivo.",
    })
    .refine((file) => file.length && file[0].size <= 5 * 1024 * 1024, {
      message: "O arquivo deve ter no máximo 5MB.",
    })
    .refine(
      (file) =>
        file.length &&
        ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(
          file[0].type,
        ),
      {
        message:
          "Apenas imagens nos formatos JPEG, PNG, GIF ou WEBP são permitidas",
      },
    ),
  links: z
    .array(LinkSchema)
    .min(1, "Você deve cadastrar 1 link no mínimo")
    .default([]),
  projectFeatures: z
    .array(ProjectFeatureSchema)
    .min(1, "Você deve cadastrar pelo menos uma feature."),
  launchInfo: LaunchInfoSchema,
  genres: z.array(Genre).min(1, "Você deve adicionar pelo menos 1 gênero"),
  partnerships: z
    .array(PartnershipSchema)
    .min(1, "Você deve cadastrar 1 link no mínimo")
    .default([]),
});

export type FormData = z.infer<typeof FormSchema>;
export type LaunchInfo = z.infer<typeof LaunchInfoSchema>;
