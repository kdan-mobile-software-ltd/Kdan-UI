import React, { useEffect, useState } from "react";
import * as ReactDom from "react-dom";

export type PortalProps = {
  children: React.ReactNode;
  container?: HTMLElement | (() => HTMLElement);
};

const getContainer = (container: HTMLElement | React.ReactNode) => {
  return typeof container === "function" ? container() : container;
};

const index: React.FC<PortalProps> = ({ children, container }: PortalProps) => {
  const [mountNode, setMountNode] = useState<Element | null>(null);

  useEffect(() => {
    setMountNode(getContainer(container || document.body));
  }, [container]);

  return mountNode ? ReactDom.createPortal(children, mountNode) : mountNode;
};

export default index;
