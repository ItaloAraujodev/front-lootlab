"use client";
import { z } from "zod";

// Esquema para validação de um Link
const LinkSchema = z.object({
  url: z
    .string()
    .url("URL inválida")
    .refine(
      (link) => link.startsWith("https"),
      "Por segurança, o link deve iniciar com https",
    )
    .default("")
    .optional(),
});

// Esquema para validação de ProjectFeatures
const ProjectFeatureSchema = z.object({
  title: z.string().min(1, "O título da feature é obrigatório").optional(),
  isFeature: z.boolean().optional(),
});

// Esquema para validação de LaunchInfo
const LaunchInfoSchema = z.object({
  id: z.string(),
  launchDate: z.date({ message: "A data do Launch é obrigatória" }).optional(),
  marketCap: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Marekt Cap deve ser positivo")
    .optional(),
  currentSupply: z
    .string()
    .min(1, { message: "O current supply é alto, médio ou baixo" })
    .default(" ")
    .optional(),
  totalSupply: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Total Supply deve ser positivo")
    .optional(),
  privateSale: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Private Sale deve ser positivo")
    .optional(),
  publicSale: z.coerce

    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Public Sale deve ser positivo")
    .optional(),
});

// Esquema para validação de Genero
const Genre = z.object({
  name: z.string().optional(),
});

// Esquema para validação de Partnership
const PartnershipSchema = z.object({
  // name: z.string().min(1, "O nome da parceria é obrigatório").optional(),
  // type: z.string().min(1, "O tipo da parceria é obrigatório").optional(),
  link_url: z
    .string()
    .url("URL da parceria inválida")
    .refine(
      (link) => link.startsWith("https"),
      "Por segurança, o link deve iniciar com https",
    )
    .default("")
    .optional(),
});

// Esquema principal para validação do Post
export const FormSchemaToUpdate = z.object({
  title: z.string().min(1, "O Nome do Jogo é obrigatório").optional(),
  market_link: z
    .string()
    .url("URL de mercado inválida")
    .refine(
      (link) => link.startsWith("https"),
      "Por segurança, o link deve iniciar com https",
    )
    .optional(),
  score: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Public Sale deve ser positivo")
    .optional(),
  investment: z.string().optional(),
  network: z.string().min(1, "A rede é obrigatória").optional(),
  token: z.string().min(1, "O token é obrigatório").optional(),
  comment_author: z
    .string()
    .min(1, "O comentário do autor é obrigatório")
    .optional(),
  file: z
    .instanceof(globalThis.FileList, { message: "Escolha um arquivo valido" })
    .refine((file) => (file.length ? file[0].size <= 5 * 1024 * 1024 : true), {
      message: "O arquivo deve ter no máximo 5MB.",
    })
    .refine(
      (file) =>
        file.length
          ? ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(
              file[0].type,
            )
          : true,
      {
        message:
          "Apenas imagens nos formatos JPEG, PNG, GIF ou WEBP são permitidas",
      },
    )
    .optional(),
  links: z
    .array(LinkSchema)
    .min(1, "Você deve cadastrar 1 link no mínimo")
    .default([])
    .optional(),
  projectFeatures: z
    .array(ProjectFeatureSchema)
    .min(1, "Você deve cadastrar pelo menos uma feature.")
    .optional(),
  launchInfo: LaunchInfoSchema.optional(),
  Image: z.array(z.object({ id: z.string() })).optional(),
  genres: z
    .array(Genre)
    .min(1, "Você deve adicionar pelo menos 1 gênero")
    .optional(),
  partnerships: z
    .array(PartnershipSchema)
    .min(1, "Você deve cadastrar 1 link no mínimo")
    .default([])
    .optional(),
  postId: z.string(),
  oldImageUrl: z.string(),
});

export type FormDataToUpdate = z.infer<typeof FormSchemaToUpdate>;
export type LaunchInfo = z.infer<typeof LaunchInfoSchema>;
