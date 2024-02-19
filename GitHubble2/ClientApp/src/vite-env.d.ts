/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_AUTH0_DOMAIN: string
  readonly VITE_AUTH0_CLIENTID: string
  readonly VITE_GITHUB_OAUTH_URL: string
  readonly VITE_GITHUB_CLIENTID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
