import React from "react";

import { Wrapper, Bun } from "./styled";

type MenuProps = {
  onClick: () => void;
  isActive?: boolean;
};

const MenuBtn: React.FC<MenuProps> = ({
  onClick,
  isActive = false,
}: MenuProps) => (
  <Wrapper onClick={onClick}>
    <Bun isActive={isActive} sequence="top" />
    <Bun isActive={isActive} sequence="middle" />
    <Bun isActive={isActive} sequence="bottom" />
  </Wrapper>
);

export default MenuBtn;
