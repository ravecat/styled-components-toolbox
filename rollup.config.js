import nodeResolve from "rollup-plugin-node-resolve";
import includePaths from 'rollup-plugin-includepaths';
import json from 'rollup-plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import sourceMaps from "rollup-plugin-sourcemaps";
import svg from "rollup-plugin-svg";
import { uglify } from "rollup-plugin-uglify";

const commonPlugins = [
  peerDepsExternal(),
  sourceMaps(),
  json(),
  includePaths({
    paths: ['src'],
  }),
  nodeResolve(),
  svg(),
  babel({
    exclude: "node_modules/**",
    // Enable that options https://github.com/rollup/rollup-plugin-babel#helpers return error
    // plugins: [
    //   "@babel/plugin-external-helpers"
    // ],
    // externalHelpers: true,
    runtimeHelpers: true
  }),
  commonjs({
    include: 'node_modules/**',
    namedExports: {
      react: [
        "cloneElement",
        "createFactory",
        "Component",
        "PropTypes",
        "createElement",
        "createContext"
      ],
      "react-dom": ["render"],
      "react-is": ["isElement", "isValidElementType", "ForwardRef"]
    }
  }),
  uglify()
];

const globals = { react: "React", "react-dom": "ReactDOM" };

const configBase = {
  input: "./src/index.js",
  plugins: commonPlugins
};

const standaloneBaseConfig = {
  ...configBase,
  output: {
    file: "dist/index.js",
    format: "cjs",
    globals,
    sourcemap: true
  },
  plugins: configBase.plugins
};

export default standaloneBaseConfig;
