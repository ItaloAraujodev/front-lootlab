"use client";
import { z } from "zod";

// Esquema para validação de um Link
const LinkSchema = z.object({
  id: z.string().optional(),
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
  id: z.string(),
  title: z.string().optional(),
  isFeature: z.boolean().optional(),
});

// Esquema para validação de LaunchInfo
const LaunchInfoSchema = z.object({
  id: z.string(),
  launchDate: z.date().optional(),
  marketCap: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Marekt Cap deve ser positivo")
    .optional(),
  currentSupply: z.string().optional(),
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
  id: z.string().optional(),
  name: z.string().optional(),
});

// Esquema para validação de Partnership
const PartnershipSchema = z.object({
  id: z.string().optional(),
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
  title: z.string().optional(),
  market_link: z.string().optional(),
  category: z.enum(["NFT Jogos", "NFT Artes"], {
    message: "Escolha uma categoria",
  }),
  score: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Public Sale deve ser positivo")
    .optional(),
  investment: z.string().optional(),
  network: z.string().optional(),
  token: z.string().optional(),
  comment_author: z.string().optional(),
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
  links: z.array(LinkSchema).default([]).optional(),
  projectFeatures: z.array(ProjectFeatureSchema).optional(),
  launchInfo: LaunchInfoSchema.optional(),
  Image: z.array(z.object({ id: z.string() })).optional(),
  genres: z.array(Genre).optional(),
  partnerships: z.array(PartnershipSchema).default([]).optional(),
  postId: z.string(),
  oldImageUrl: z.string(),
});

export type FormDataToUpdate = z.infer<typeof FormSchemaToUpdate>;
export type LaunchInfo = z.infer<typeof LaunchInfoSchema>;
