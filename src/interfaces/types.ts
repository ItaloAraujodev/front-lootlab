export type TPathKeys<T> =
  | keyof T
  | {
      [k in Extract<keyof T, string | number>]: T[k] extends Array<infer U>
        ?
            | `${k}.${number}`
            | `${k}.${number}.${Extract<keyof U, "linkUrl" | "type">}`
        : T[k] extends object // Se for um objeto, permite acessar suas chaves
          ? `${k}.${Extract<TPathKeys<T[k]>, string | number>}` // Caminho para propriedades aninhadas
          : never;
    }[Extract<keyof T, string | number>];

export type TCardBasic<T> = keyof T;

export type TRole = "WRITER" | "ADMIN" | "USER";

export type TIcon =
  | "twitter"
  | "x"
  | "instagram"
  | "discord"
  | "telegram"
  | "facebook"
  | "reddit"
  | "medium"
  | "youtube"
  | "whitepaper"
  | "globe"
  | "coinmarketcap";

export type filters = "recent" | "oldest" | "order" | "all";
