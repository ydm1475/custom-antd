import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import sass from "rollup-plugin-sass";

const tsconfigOverride = {
  compilerOptions: {
    // 打包后生成.d.ts文件
    declaration: true,
  },
  include: ["src"],
  exclude: [
    "src/**/*.test.tsx",
    "src/**/*.stories.tsx",
    "src/**/*.mdx",
    "src/setupTests.js",
  ],
};

const config = {
  input: "./src/index.tsx",
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      tsconfigOverride,
    }),
    sass({
      output: "dist/index.css",
    }),
  ],
};

export default config;
