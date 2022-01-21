import {
  LeftArrow,
  RightArrow,
  LeftArrowWhite,
  RightArrowWhite,
  LeftArrowSky,
  RightArrowSky,
  ButtonLeft,
  ButtonRight,
} from '../Icon';

type Props = {
  btn: {
    left: React.FC<React.SVGProps<SVGSVGElement>>;
    right: React.FC<React.SVGProps<SVGSVGElement>>;
  };
  indicator: {
    [indicatorMode: string]: {
      left: React.FC<React.SVGProps<SVGSVGElement>>;
      right: React.FC<React.SVGProps<SVGSVGElement>>;
    };
  };
};

const data: Props = {
  btn: {
    left: ButtonLeft,
    right: ButtonRight,
  },
  indicator: {
    dark: {
      left: LeftArrow,
      right: RightArrow,
    },
    light: {
      left: LeftArrowWhite,
      right: RightArrowWhite,
    },
    sky: {
      left: LeftArrowSky,
      right: RightArrowSky,
    },
  },
};

export default data;
