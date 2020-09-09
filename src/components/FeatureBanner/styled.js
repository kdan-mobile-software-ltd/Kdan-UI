import styled from 'styled-components';

export const BannerWrapper = styled.section`
  position: relative;
`;

export const BannerInner = styled.div`
  transition: background 1.2s;
  background: ${({ bg }) => bg};
  height: 100vh;
`;
