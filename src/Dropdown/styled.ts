import styled from "styled-components";

export const Wrapper = styled.div``;

export const TriggerWrapper = styled.div`
  display: inline-block;
`;

export const DropdownWrapper = styled.div`
  z-index: 1000;
  position: fixed;

  ${({ top, left, fullWidth }: CoordinatesType & { fullWidth: boolean }) => `
    top: ${top}px;
    left: ${left}px;
    width: ${fullWidth ? "100%" : "auto"}
  `}
`;
