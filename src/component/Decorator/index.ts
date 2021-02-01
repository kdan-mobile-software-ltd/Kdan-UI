import styled from "styled-components";
import { colors } from "../../themes";

export const Container = styled.div`
  background: #ecf0f1;
  width: 100%;
  min-height: 50vh;
  height: 100%;

  ${({ padding }: { padding?: boolean }) =>
    padding ? "padding: 3rem;" : "margin: -1rem;"};
`;

export const ContentStyle = styled.div`
  width: 60%;
  background: ${colors.N0};
  padding: 2rem 1.5rem;
`;
