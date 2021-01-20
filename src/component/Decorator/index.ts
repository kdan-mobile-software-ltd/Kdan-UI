import styled, { css } from "styled-components";
import { colors } from "../../themes";

type sizeType = "middle";

const styleType = {
  middle: css`
    padding: 3rem;
    width: 100%;
    min-height: 100vh;
    height: 100%;
  `,
};

export const Container = styled.div`
  background: #ecf0f1;

  ${({ size }: { size: sizeType }) => styleType[size]};
`;

export const ContentStyle = styled.div`
  width: 60%;
  background: ${colors.N0};
  padding: 2rem 1.5rem;
`;
