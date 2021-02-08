import styled from "styled-components";

export const Container = styled.div`
  background: #ecf0f1;
  width: 100%;
  min-height: 50vh;
  height: 100%;

  ${({ padding }: { padding?: boolean }) =>
    padding ? "padding: 3rem;" : "margin: -1rem;"};
`;

export const Paper = styled.div`
  display: flex;
  margin: auto;
`;
