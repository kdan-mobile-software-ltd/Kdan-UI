import React from "react";

import { Wrapper, Img } from "./styled";

export type AvatarProps = {
  alt?: string;
  src?: string;
  size?: "small" | "medium" | "large" | "XLarge";
  children?: string;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  alt,
  src,
  size = "medium",
  children,
  className,
}: AvatarProps) => {
  return (
    <Wrapper size={size} className={className}>
      {src ? <Img alt={alt} src={src} /> : children}
    </Wrapper>
  );
};

export default Avatar;
