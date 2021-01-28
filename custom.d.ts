declare module "@rollup/plugin-image";
declare module "rollup-plugin-uglify";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

type CoordinatesType = {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

type CoordNameType = "left" | "right" | "top" | "bottom";

type PositionType = "bottom left" | "bottom right" | "bottom center";
