interface HTMLConfig {
  TITLE: string;
  DESCRIPTION: string;
  KEYWORDS: string;
  VERSION: string;
}

export interface AppConfig {
  API_BASE_URL: string;
}

export type Config = HTMLConfig & AppConfig;
export const config: Config =
  process.title === "browser"
    ? ((window as any).__CONFIG__ as Config)
    : {
      ...require("./config.base").config,
      ...require(`./config.${process.env.NODE_ENV || "development"}`).config
    };