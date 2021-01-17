import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import ts from "rollup-plugin-typescript2";
import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";

// @ts-ignore
const pkg = require("../package.json");

const commonConfig = {
  input: "src/index.ts",
  external: [...Object.keys(pkg.peerDependencies || {})],
  watch: {
    include: "src/**",
  },
}

const commonPlugins = [
  ts({
    tsconfig: "tsconfig.build.json",
  }),
  resolve(),
  commonjs(),
  css({ output: "bundle.css" }),
  sourceMaps(),
  terser(),
]

export default [
  {
    ...commonConfig,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins: commonPlugins,
  },
  {
    ...commonConfig,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins: commonPlugins,
  },
];
