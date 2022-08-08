import { registerApplication, start } from "single-spa";

registerApplication("vue", () => import("./src/vue/vue.app.js"), () => true);

registerApplication(
  "react",
  () => import("./src/react/main.app.js"),
  () => true
  // () => (location.pathname.startsWith("/vue") ? false : true)
);

start();
