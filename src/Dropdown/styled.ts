import styled from 'styled-components';

import zIndex from '../themes/zIndex';

export const Wrapper = styled.div``;

export const TriggerWrapper = styled.div`
  display: inline-block;
`;

export const Outer = styled.div``;

export const DropdownWrapper = styled.div`
  z-index: ${zIndex[4]};
  position: fixed;
  overflow: hidden;
  opacity: 0;

  ${({ top, left, fullWidth }: CoordinatesType & { fullWidth: boolean; open: boolean }) => `
    top: ${top}px;
    left: ${left}px;
    width: ${fullWidth ? '100%' : 'auto'};
  `}

  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 50ms, opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
