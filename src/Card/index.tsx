import React from "react";

import { Wrapper, MediaWrapper, ContentWrapper, ActionWrapper } from "./styled";

export type CardProps = {
  media?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  bgColor?: string;
  hideBorder?: boolean;
};

const Card: React.FC<CardProps> = ({
  media,
  children,
  actions,
  bgColor = "inherit",
  hideBorder = false,
}: CardProps) => {
  return (
    <Wrapper bgColor={bgColor} hideBorder={hideBorder}>
      {media && <MediaWrapper>{media}</MediaWrapper>}
      <ContentWrapper>{children}</ContentWrapper>
      {actions && <ActionWrapper>{actions}</ActionWrapper>}
    </Wrapper>
  );
};

export default Card;
