/* eslint-disable flowtype/require-valid-file-annotation, no-console, import/extensions */
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import flow from "rollup-plugin-flow";
import sourceMaps from "rollup-plugin-sourcemaps";
import svg from "rollup-plugin-svg";

const paths = require('./config/paths')

const commonPlugins = [
  flow(),
  sourceMaps(),
  babel({
    exclude: "node_modules/**",
    runtimeHelpers: true
  }),
  nodeResolve({
    jsnext: true,
    browser: true,
    customResolveOptions: {
      moduleDirectory: [paths.appSrc]
    }
  }),
  svg(),
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
    name: "styled-components-toolbox",
    globals,
    sourcemap: true
  },
  plugins: configBase.plugins
};

export default standaloneBaseConfig;
