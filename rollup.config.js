/* eslint-disable flowtype/require-valid-file-annotation, no-console, import/extensions */
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import flow from "rollup-plugin-flow";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import svg from "rollup-plugin-svg";

const commonPlugins = [
  flow({
    pretty: true
  }),
  sourceMaps(),
  nodeResolve({
    jsnext: true,
    main: true,
    browser: true,
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }),
  babel({
    exclude: "node_modules/**"
  }),
  svg(),
  typescript(),
  commonjs({
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
  })
];

const globals = { react: "React", "react-dom": "ReactDOM" };

const configBase = {
  input: "./src/index.js",
  plugins: commonPlugins
};

const standaloneBaseConfig = {
  ...configBase,
  output: {
    file: "dist/styled-components-toolbox.js",
    format: "cjs",
    name: "sct",
    globals,
    sourcemap: true
  },
  plugins: configBase.plugins
};

export default standaloneBaseConfig;
