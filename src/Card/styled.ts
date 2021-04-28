import styled from 'styled-components';

import colors from '../themes/colors';
import breakpoints from '../themes/breakpoints';

export const Wrapper = styled.div<{ bgColor: string; hideBorder: boolean }>`
  overflow: hidden;
  box-sizing: border-box;
  min-width: 100px;
  height: 100%;
  border-radius: 4px;
  border: ${({ hideBorder }) => (hideBorder ? 'unset' : `solid 1px ${colors.N15}`)};
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${({ bgColor }) => colors[bgColor] || bgColor};

  :hover {
    box-shadow: 0 0 24px 0 rgba(65, 65, 65, 0.19);
  }
`;

export const MediaWrapper = styled.div``;

export const ContentWrapper = styled.div`
  padding: 30px;
  background-color: inherit;

  @media ${breakpoints.down('xl')} {
    padding: 16px;
  }
`;

export const ActionWrapper = styled.div`
  padding: 4px 30px 30px;
  background-color: inherit;

  @media ${breakpoints.down('xl')} {
    padding: 4px 20px 20px;
  }
`;
