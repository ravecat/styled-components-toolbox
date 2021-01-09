import resolve from "rollup-plugin-node-resolve";
import includePaths from "rollup-plugin-includepaths";
import json from "rollup-plugin-json";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import sourceMaps from "rollup-plugin-sourcemaps";
import svg from "rollup-plugin-svg";
import { uglify } from "rollup-plugin-uglify";

const plugins = [
  sourceMaps(),
  json(),
  includePaths({
    paths: ["src"]
  }),
  resolve({
    customResolveOptions: {
      moduleDirectory: "node_modules"
    }
  }),
  babel({
    exclude: "node_modules/**",
    runtimeHelpers: true
  }),
  commonjs(),
  svg(),
  uglify()
];

export default {
  input: "./src/index.js",
  /* 
  Exclude modules from bundle according to
  https://rollupjs.org/guide/en/#peer-dependencies
  https://www.styled-components.com/docs/faqs#marking-styledcomponents-as-external-in-your-package-dependencies
  */
  external: ["react", "styled-components"],
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true
  },
  plugins
};
