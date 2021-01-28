import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from "rollup-plugin-typescript2";
// import nodeResolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import { uglify } from "rollup-plugin-uglify";
import copy from "rollup-plugin-copy";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";

import pkg from "./package.json";

const input = [
  "src/index.ts",
  "src/ClickAwayListener/index.tsx",
  "src/Portal/index.tsx",
  "src/LanguageBar/index.tsx",
  "src/Typography/index.tsx",
  "src/Button/index.tsx",
  "src/Logo/index.tsx"
];

const plugins = [
  peerDepsExternal(),
  copy({
    targets: [
      { src: './src/assets/fonts/dist/*', dest: './dist/fonts' },
      { src: './src/assets/images/*', dest: './dist/images' }
    ]
  }),
  // nodeResolve(),
  image(),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  url(),
  svgr(),
  uglify(),
];

export default {
  input,
  output: [
    {
      dir: 'dist',
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
