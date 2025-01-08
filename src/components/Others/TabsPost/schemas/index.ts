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
    .default(""),
});

// Esquema para validação de ProjectFeatures
const ProjectFeatureSchema = z.object({
  title: z.string().min(1, "O título da feature é obrigatório"),
  isFeature: z.boolean(),
});

// Esquema para validação de LaunchInfo
const LaunchInfoSchema = z.object({
  launchDate: z.date({ message: "A data do Launch é obrigatória" }),
  marketCap: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Marekt Cap deve ser positivo")
    .optional(),
  currentSupply: z.string().default(" ").optional(),
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
  name: z.string(),
});

// Esquema para validação de Partnership
const PartnershipSchema = z.object({
  // name: z.string().min(1, "O nome da parceria é obrigatório"),
  // type: z.string().min(1, "O tipo da parceria é obrigatório"),
  link_url: z
    .string()
    .url("URL da parceria inválida")
    .refine(
      (link) => link.startsWith("https"),
      "Por segurança, o link deve iniciar com https",
    )
    .default(""),
});

// Esquema principal para validação do Post
export const FormSchema = z.object({
  title: z.string().min(1, "O Nome do Jogo é obrigatório"),
  category: z.enum(["NFT Jogos", "NFT Artes"], {
    message: "Escolha uma categoria",
  }),
  market_link: z.string().optional(),
  score: z.coerce
    .number({ message: "Digite um número válido" })
    .nonnegative("O valor do Public Sale deve ser positivo")
    .optional(),
  investment: z.string().optional(),
  network: z.string().optional(),
  token: z.string().optional(),
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
  links: z.array(LinkSchema).default([]),
  projectFeatures: z.array(ProjectFeatureSchema).optional(),
  launchInfo: LaunchInfoSchema,
  genres: z
    .array(Genre)
    .min(1, { message: "É necessário cadastrar ao menos 1 gênero." })
    .default([]),
  partnerships: z.array(PartnershipSchema).default([]),
});

export type FormData = z.infer<typeof FormSchema>;
export type LaunchInfo = z.infer<typeof LaunchInfoSchema>;
