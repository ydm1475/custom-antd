import basicConfig from "./rollup.config";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";

const config = {
  ...basicConfig,
  output: [
    {
      name: "ydmAntd",
      file: "dist/index.umd.js",
      format: "umd",
      export: "named",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
      plugins: [terser()],
    },
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15,
    }),

    ...basicConfig.plugins,
  ],
  external: ["react", "react-dom"],
};

export default config;
