import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: "src/webComponents/web-components.ts",
      name: "WebComponents",
      formats: ["es", "umd"],
      fileName: (format) => `web-components.${format}.js`,
    },
    rollupOptions: {
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
    cssCodeSplit: false,
  },
  define: {
    __PACKAGE_VERSION__: JSON.stringify(pkg.version),
    __PACKAGE_NAME__: JSON.stringify(pkg.name),
  },
});
