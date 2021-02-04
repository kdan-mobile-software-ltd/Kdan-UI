import styled from "styled-components";
import { typography, space, color, Theme, SpaceProps } from "styled-system";

const Box = styled.div<Theme & SpaceProps>(typography, space, color);

export default Box;
