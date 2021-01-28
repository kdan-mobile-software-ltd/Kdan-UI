import React from "react";

import { Wrapper, MediaWrapper, ContentWrapper, ActionWrapper } from "./styled";

export type CardProps = {
  media?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ media, children, actions }: CardProps) => {
  return (
    <Wrapper>
      {media && <MediaWrapper>{media}</MediaWrapper>}
      <ContentWrapper>{children}</ContentWrapper>
      {actions && <ActionWrapper>{actions}</ActionWrapper>}
    </Wrapper>
  );
};

export default Card;
