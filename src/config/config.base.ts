const pkg = require("../../pakeage.json");
import { Config } from "./";

export const config: Config = {
  TITLE: "GitHub Viewer",
  DESCRIPTION: "github repositories viewer",
  KEYWORDS: "github, api, react, sample",
  VERSION: pkg.version,
  API_BASE_URL: "",
};