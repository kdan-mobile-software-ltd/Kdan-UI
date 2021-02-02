import React, { useRef, useState } from "react";

import { Wrapper, TriggerWrapper, ContentWrapper, Inner } from "./styled";

export type CollapseProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

const Collapse: React.FC<CollapseProps> = ({
  trigger,
  children,
}: CollapseProps) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((current) => !current);
  };

  return (
    <Wrapper>
      <TriggerWrapper onClick={handleClick}>
        {typeof trigger === "function" ? trigger(open) : trigger}
      </TriggerWrapper>
      <ContentWrapper
        style={{ height: open ? `${innerRef.current?.clientHeight}px` : 0 }}>
        <Inner ref={innerRef}>{children}</Inner>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Collapse;
