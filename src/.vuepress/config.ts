import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "en-US",
  title: "Weixin's Blog",
  description: "Weixin's Blog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
