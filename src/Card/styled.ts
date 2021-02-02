import styled from "styled-components";

import colors from "../themes/colors";

export const Wrapper = styled.div`
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  min-width: 100px;
  border-radius: 4px;
  border: solid 1px ${colors.N15};
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover {
    box-shadow: 0 0 30px 0 rgba(65, 65, 65, 0.19);
  }
`;

export const MediaWrapper = styled.div``;

export const ContentWrapper = styled.div`
  padding: 16px;
`;

export const ActionWrapper = styled.div`
  padding: 4px 16px 16px;
`;
