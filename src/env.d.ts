/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PORT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
