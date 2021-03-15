import React, { useEffect, useState } from "react";
import * as ReactDom from "react-dom";

export type PortalProps = {
  children: React.ReactNode;
  container?: HTMLElement | (() => HTMLElement);
  disablePortal?: boolean;
};

const getContainer = (container: HTMLElement | React.ReactNode) => {
  return typeof container === "function" ? container() : container;
};

const Portal: React.FC<PortalProps> = ({
  children,
  container,
  disablePortal = false,
}: PortalProps) => {
  const [mountNode, setMountNode] = useState<Element | null>(null);

  useEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container || document.body));
    }
  }, [container]);

  return mountNode ? ReactDom.createPortal(children, mountNode) : mountNode;
};

export default Portal;
