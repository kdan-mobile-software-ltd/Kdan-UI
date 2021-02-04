import React from "react";

import { Wrapper, MediaWrapper, ContentWrapper, ActionWrapper } from "./styled";

export type CardProps = {
  media?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  bgColor?: string;
};

const Card: React.FC<CardProps> = ({
  media,
  children,
  actions,
  bgColor = "inherit",
}: CardProps) => {
  return (
    <Wrapper bgColor={bgColor}>
      {media && <MediaWrapper>{media}</MediaWrapper>}
      <ContentWrapper>{children}</ContentWrapper>
      {actions && <ActionWrapper>{actions}</ActionWrapper>}
    </Wrapper>
  );
};

export default Card;
