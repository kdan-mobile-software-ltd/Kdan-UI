import styled from "styled-components";
import {
  typography,
  space,
  color,
  layout,
  Theme,
  SpaceProps,
} from "styled-system";

const Box = styled.div<Theme & SpaceProps>(typography, layout, space, color);

export default Box;
