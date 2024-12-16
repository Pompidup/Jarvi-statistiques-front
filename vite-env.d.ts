/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HASURA_ENDPOINT: string;
  readonly VITE_HASURA_ADMIN_SECRET: string;
  readonly VITE_USER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
