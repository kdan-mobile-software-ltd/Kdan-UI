import React, { useRef } from "react";

import { Wrapper, ContentWrapper, Inner } from "./styled";

export type CollapseProps = {
  open?: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
};

const Collapse: React.FC<CollapseProps> = ({
  open = false,
  trigger,
  children,
}: CollapseProps) => {
  const innerRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      {trigger}
      <ContentWrapper
        style={{ height: open ? `${innerRef.current?.clientHeight}px` : 0 }}>
        <Inner ref={innerRef}>{children}</Inner>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Collapse;
