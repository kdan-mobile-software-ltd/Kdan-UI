import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from "rollup-plugin-typescript2";
// import nodeResolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

// const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = [
  "src/index.ts",
  "src/Example/index.tsx",
  "src/ClickAwayListener/index.tsx",
  "src/LanguageBar/index.tsx"
];

const plugins = [
  peerDepsExternal(),
  // nodeResolve({
  //   extensions,
  //   modulesOnly: true,
  // }),
  image(),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  terser(),
];

export default {
  input,
  output: [
    {
      dir: 'dist',
      // file: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: 'auto',
    }
  ],
  plugins,
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  preserveModules: true,
};
