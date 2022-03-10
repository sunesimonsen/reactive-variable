import { terser } from "rollup-plugin-terser";

const minifyPlugins = [
  terser({
    compress: true,
    mangle: {
      reserved: [],
      properties: {
        regex: /^_/,
      },
    },
  }),
];

export default [
  {
    input: "src/index.mjs",
    output: {
      file: "dist/reactive-variable.cjs.js",
      format: "cjs",
    },
  },
  {
    input: "src/index.mjs",
    output: {
      file: "dist/reactive-variable.esm.js",
      format: "esm",
    },
  },
  {
    input: "src/index.mjs",
    output: {
      file: "dist/reactive-variable.cjs.min.js",
      format: "cjs",
    },
    plugins: minifyPlugins,
  },
  {
    input: "src/index.mjs",
    output: {
      file: "dist/reactive-variable.esm.min.js",
      format: "esm",
    },
    plugins: minifyPlugins,
  },
];
