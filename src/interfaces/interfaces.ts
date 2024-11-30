import type { FormData } from "@/components/Others/TabsCreatePost/schemas";

/**
 * Interface genérica utilizada para definir a estrutura de informações de um card.
 *
 * @template T - O tipo genérico que representa o schema a ser utilizado para inferencia de tipos
 *
 * @property {string} title - O título exibido para o dado no card.
 * @property {keyof T} pathRegister - A chave do schema genérico `T` que será usada como referência para os dados
 *
 * @example
 * const FormSchema = z.object({
 *  title: z.string().min(1, "O título é obrigatório"),
 *  score: z.number().optional(),
 *  network: z.string().min(1, "A rede é obrigatória"),
 *  ...
 * })
 *
 * type FormData = z.infer<typeof FormSchema>;
 *
 * interface IInfosCard<T> {
 *  title: string;
 *  pathRegister: keyof T;
 * }
 *
 * const basicInfos: IInfosCard<FormData>[] = [
 *   { title: "Nome do Jogo", pathRegister: "title" },
 *   { title: "Nota", pathRegister: "score" },
 *   { title: "Rede", pathRegister: "network" },
 * ];
 */
export interface IInfosCard<T> {
  type?: "text" | "number";
  title: string;
  pathRegister: keyof T;
}

export interface IDataCreatePost {
  data: FormData;
  token: string;
  authorId: string;
}
