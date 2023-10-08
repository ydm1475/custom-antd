import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import sass from "rollup-plugin-sass";

const config = {
  input: "./components/index.js",
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript(),
    sass({
      output: "build/index.css",
    }),
  ],
};

export default config;
