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
  data: {
    postData: string; // JSON.stringify dos dados do post
    file: File; // O arquivo a ser enviado
  };
  authorizationToken: string;
  authorId: string;
}

interface Link {
  id: string;
  postId: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface ProjectFeature {
  id: string;
  title: string;
  isFeature: boolean;
  createdAt: string;
  updatedAt: string;
  postId: string;
}

interface LaunchInfo {
  id: string;
  launchDate: string;
  marketCap: number;
  currentSupply: string;
  totalSupply: number;
  privateSale: number;
  publicSale: number;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

interface Partnership {
  id: string;
  name: string | null;
  type: string | null;
  link_url: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id: string;
  url: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface IPost {
  id: string;
  title: string;
  market_link: string;
  score: number;
  investment: string;
  token: string;
  network: string;
  comment_author: string;
  authorId: string;
  launchInfoId: string | null;
  projectFeaturesId: string | null;
  linkId: string | null;
  createdAt: string;
  updatedAt: string;
  Image: Image[];
  links: Link[];
  ProjectFeatures: ProjectFeature[];
  LaunchInfo: LaunchInfo[];
  partnerships: Partnership[];
}
