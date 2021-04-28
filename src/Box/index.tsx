import styled from 'styled-components';
import {
  typography,
  space,
  color,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  TypographyProps,
  ColorProps,
  PositionProps,
  BackgroundProps,
  ShadowProps,
  BorderProps,
  LayoutProps,
  GridProps,
  FlexboxProps,
  SpaceProps,
} from 'styled-system';

const Box = styled.div<
  TypographyProps &
    ColorProps &
    PositionProps &
    BackgroundProps &
    BorderProps &
    LayoutProps &
    GridProps &
    FlexboxProps &
    SpaceProps &
    ShadowProps
>(typography, layout, space, color, flexbox, grid, background, border, position, shadow);

export default Box;
