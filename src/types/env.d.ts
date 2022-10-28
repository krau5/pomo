/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_KEY: string;
  readonly AUTH_DOMAIN: string;
  readonly PROJECT_ID: string;
  readonly STORAGE_BUCKET: string;
  readonly MESSAGING_SENDER_ID: string;
  readonly APP_ID: string;
  readonly MEASUREMENT_ID: string;
  readonly DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
