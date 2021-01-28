import styled from "styled-components";

import colors from "../themes/colors";

export const Wrapper = styled.div`
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  min-width: 275px;
  border-radius: 4px;
  border: solid 1px ${colors.N10};
`;

export const MediaWrapper = styled.div``;

export const ContentWrapper = styled.div`
  padding: 16px;
`;

export const ActionWrapper = styled.div`
  padding: 4px 16px 16px;
`;
