import styled from "styled-components";

export const Wrapper = styled.div`
  width: 210px;
  height: 220px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  background-color: rgb(244, 245, 247);
  display: inline-block;
  margin: 10px;
`;

export const Color = styled.div<{ hex: string }>`
  background-color: ${({ hex }) => hex};
  height: 100px;
`;

export const Intro = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Group = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 10px;
  min-width: 40%;
`;

export const Subtitle = styled.span`
  font-size: 12px;
`;

export const Content = styled.span`
  font-size: 14px;
`;
