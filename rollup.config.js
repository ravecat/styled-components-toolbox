/* eslint-disable flowtype/require-valid-file-annotation, no-console, import/extensions */
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import flow from "rollup-plugin-flow";
import sourceMaps from "rollup-plugin-sourcemaps";

const commonPlugins = [
  flow({
    pretty: true
  }),
  sourceMaps(),
  nodeResolve(),
  babel({
    exclude: "node_modules/**"
  }),
  commonjs({
    ignoreGlobal: true
  })
];

const configBase = {
  input: "./src/index.js",

  // \0 is rollup convention for generated in memory modules
  external: id =>
    !id.startsWith("\0") && !id.startsWith(".") && !id.startsWith("/"),
  plugins: commonPlugins
};

const globals = { react: "React", "react-dom": "ReactDOM" };

const standaloneBaseConfig = {
  ...configBase,
  output: {
    file: "dist/styled-components-toolbox.js",
    format: "iife",
    globals,
    name: "sct",
    sourcemap: true
  },
  external: Object.keys(globals),
  plugins: configBase.plugins
};

export default standaloneBaseConfig;
