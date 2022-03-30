import styled from 'styled-components';
import { hexToRGBA } from '../helpers/utility';
import colors from '../themes/colors';
import breakpoints from '../themes/breakpoints';
import zIndex from '../themes/zIndex';

export const IconButton = styled.button<{ isDisabled?: boolean; mode: string; isHover: boolean }>`
  outline: none;
  border: 0;
  width: 72px;
  height: 72px;
  border-radius: 36px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.13), 0px 2px 2px 0px rgba(0, 0, 0, 0.1),
    0px 1px 5px 0px rgba(0, 0, 0, 0.05);
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: absolute;
  top: calc(50% - 36px);
  z-index: ${zIndex[2]};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    width: 29px;
    height: 26px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition: opacity 0.3s;
  }

  ${({ isDisabled, mode }) => {
    const bgColors = {
      dark: {
        normal: colors.N100,
        hover: hexToRGBA(colors.N100, 0.8),
      },
      light: {
        normal: colors.P50,
        hover: hexToRGBA(colors.P50, 0.8),
      },
      disabled: {
        normal: colors.N15,
      },
      campaign: {
        normal: colors.N0,
        hover: colors.N0,
      },
    } as {
      [key: string]: { normal: string; hover?: string };
    };
    const boxShadows = {
      dark:
        '0px 3px 1px -2px rgba(0, 0, 0, 0.13), 0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 1px 5px 0px rgba(0, 0, 0, 0.05)',
      light:
        '0px 3px 1px -2px rgba(0, 0, 0, 0.13), 0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 1px 5px 0px rgba(0, 0, 0, 0.05)',
      disabled:
        '0px 3px 1px -2px rgba(0, 0, 0, 0.13), 0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 1px 5px 0px rgba(0, 0, 0, 0.05)',
      campaign: 'none',
    } as {
      [key: string]: string;
    };
    if (isDisabled)
      return `
      background-color: ${bgColors.disabled.normal};
      box-shadow:${boxShadows.disabled};
      cursor: default;
      pointer-events: none;
    `;
    return `
    background-color: ${bgColors[mode] ? bgColors[mode].normal : bgColors.dark.normal};
    box-shadow:${boxShadows[mode] ? boxShadows[mode] : boxShadows.dark};  
      cursor: pointer;
      pointer-events: inherit;

      :hover {
        background-color: ${bgColors[mode] ? bgColors[mode].hover : bgColors.dark.hover};
      }
    `;
  }}

  ${({ isHover }) => {
    if (isHover)
      return `
    svg:first-child{
      opacity:1;
    }
    svg:last-child{
      opacity:0;
    }
    `;

    return `
    svg:first-child{
      opacity:0;
    }
    svg:last-child{
      opacity:1;
    }
    `;
  }}
  @media ${breakpoints.down('lg')} {
    display: none;
  }
`;

export const LeftBtn = styled(IconButton)`
  left: -36px;
`;

export const RightBtn = styled(IconButton)`
  right: -36px;
`;

export const Button = styled.button<{ prev?: boolean; next?: boolean }>`
  width: 72px;
  height: 72px;
  background: none;
  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
  transition: opacity 0.25s;
  padding: 0;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media screen and (max-width: 1023px) {
    margin: 0;
    top: auto;
    bottom: 118px;
  }
  @media screen and (max-width: 767px) {
    visibility: hidden;
  }
  ${({ prev }) => prev && 'left:-36px;'}
  ${({ next }) => next && 'right:-36px;'}
`;

export const CarouselContainer = styled.div`
  position: relative;
`;

export const OverFlow = styled.div`
  overflow: hidden;
`;
export const Carousel = styled.div`
  display: flex;
  position: relative;
`;

export const CarouselItem = styled.div<{ displayCount: number }>`
  flex: 0 0 ${({ displayCount }) => 100 / displayCount}%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const SmallController = styled.div<{ visible?: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  bottom: -32px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ visible }) => !visible && 'display:none'};
`;

export const ArrowButton = styled.button`
  width: 12px;
  height: 18px;
  background: none;
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  display: none;

  @media ${breakpoints.down('lg')} {
    display: block;
  }
`;

export const DotGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 0 32px;
  & > button:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const DotButton = styled.button<{
  active?: boolean;
  indicatorMode: string;
}>`
  background: none;
  border: none;
  width: 14px;
  height: 14px;
  position: relative;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
    background: ${({ indicatorMode, active }) => {
      if (indicatorMode === 'dark') {
        return active ? '#000' : '#ddd';
      }
      if (indicatorMode === 'light') {
        return active ? '#fff' : '#727272';
      }
      if (indicatorMode === 'sky') {
        return active ? '#007aff' : '#d0d0d0';
      }
      if (indicatorMode === 'violet') {
        return active ? '#c8c8dd' : '#fff';
      }
      return active ? '#000' : '#ddd';
    }};
  }
  @media screen and (max-width: 1023px) {
    width: 10px;
    height: 10px;
  }
`;
