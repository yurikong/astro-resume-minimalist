/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

export interface ImportMetaEnv {
  readonly PORT: string
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
