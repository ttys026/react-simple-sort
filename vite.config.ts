import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import * as packageJson from "./package.json";

const libConfig = defineConfig({
  plugins: [
    dts({
      outDir: "dist",
    }),
    tsConfigPaths(),
    getBabelOutputPlugin({
      presets: ["@babel/preset-env"],
    }),
  ],
  build: {
    minify: true,
    target: ["safari11"],
    lib: {
      entry: {
        index: resolve("src", "index.tsx"),
      },
      name: "reactSimpleSort",
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
});

export default libConfig;
