import path from "path";
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
  "src/Typography/index.tsx",
  "src/Button/index.tsx",
  "src/Logo/index.tsx",
  "src/Navbar/index.tsx",
  "src/Dropdown/index.tsx",
  "src/Collapse/index.tsx",
  "src/Carousel/index.tsx",
  "src/Box/index.tsx",
  "src/Card/index.tsx",
  "src/Textfield/index.tsx",
  "src/Select/index.tsx",
  "src/themes/breakpoints.ts",
  "src/themes/colors.ts"
];

const plugins = [
  peerDepsExternal(),
  copy({
    targets: [
      { src: './src/assets/fonts/dist/*', dest: './dist/fonts' }
    ]
  }),
  // nodeResolve(),
  image(),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  url({
    fileName: '[dirname][hash][extname]',
    sourceDir: path.join(__dirname, 'src')
  }),
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
