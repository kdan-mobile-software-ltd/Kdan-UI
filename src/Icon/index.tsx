import React from "react";

import { Wrapper } from "./styled";

import { ReactComponent as TriangleUp } from "../assets/icons/triangle-up.svg";
import { ReactComponent as TriangleDown } from "../assets/icons/triangle-down.svg";
import { ReactComponent as LinkArrow } from "../assets/icons/link-arrow.svg";

type glyphType = "triangle-up" | "triangle-down" | "link-arrow";

export type IconProps = {
  glyph: glyphType;
  color: string;
};

const iconCollection = {
  "triangle-up": <TriangleUp />,
  "triangle-down": <TriangleDown />,
  "link-arrow": <LinkArrow />,
};

const Icon: React.FC<IconProps> = ({ glyph }: IconProps) => {
  return <Wrapper>{iconCollection[glyph]}</Wrapper>;
};

export default Icon;
