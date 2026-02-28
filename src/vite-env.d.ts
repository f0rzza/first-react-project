interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_BASE_SW_API_URL: string;
  readonly VITE_BASE_BLOG_API_URL: string;
  readonly VITE_NB_POSTS_PER_PAGE: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
