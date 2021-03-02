import React, { useRef, useState, useEffect } from "react";

import { ContentWrapper, Inner } from "./styled";

export type CollapseProps = {
  defaultOpen?: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
};

const Collapse: React.FC<CollapseProps> = ({
  defaultOpen = false,
  trigger,
  children,
}: CollapseProps) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((current) => !current);
  };

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <div>
      <div onClick={handleClick}>
        {typeof trigger === "function" ? trigger(open) : trigger}
      </div>
      <ContentWrapper
        style={{ height: open ? `${innerRef.current?.clientHeight}px` : 0 }}>
        <Inner ref={innerRef}>{children}</Inner>
      </ContentWrapper>
    </div>
  );
};

export default Collapse;
