import basicConfig from "./rollup.config";

import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";

const config = {
  ...basicConfig,
  input: {
    main: "./src/index.tsx",
    button: "./src/compoents/Button/index.tsx",
  },
  output: [
    {
      dir: "build",
      format: "es",
    },
  ],

  plugins: [...basicConfig.plugins, excludeDependenciesFromBundle()],
  external: ["react", "react-dom"],
};

export default config;
