export type TPathKeys<T> =
  | keyof T
  | {
      [k in Extract<keyof T, string | number>]: T[k] extends Array<infer U>
        ?
            | `${k}.${number}`
            | `${k}.${number}.${Extract<keyof U, "linkUrl" | "type">}`
        : never;
    }[Extract<keyof T, string | number>];
