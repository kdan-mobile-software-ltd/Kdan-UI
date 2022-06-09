import {
  LeftArrow,
  RightArrow,
  ButtonLeft,
  ButtonRight,
  ButtonLeftBlack,
  ButtonRightBlack,
  ButtonLeftCampaign,
  ButtonRightCampaign,
} from '../Icon';

type Props = {
  btn: {
    [mode: string]: Record<'normal' | 'hover', Record<'left' | 'right', React.FC<React.SVGProps<SVGSVGElement>>>>;
  };
  indicator: Record<'left' | 'right', React.FC<React.SVGProps<SVGSVGElement>>>;
};

const data: Props = {
  btn: {
    dark: {
      normal: {
        left: ButtonLeft,
        right: ButtonRight,
      },
      hover: {
        left: ButtonLeft,
        right: ButtonRight,
      },
    },
    light: {
      normal: {
        left: ButtonLeft,
        right: ButtonRight,
      },
      hover: {
        left: ButtonLeft,
        right: ButtonRight,
      },
    },
    campaign: {
      normal: {
        left: ButtonLeftCampaign,
        right: ButtonRightCampaign,
      },
      hover: {
        left: ButtonLeftBlack,
        right: ButtonRightBlack,
      },
    },
  },
  indicator: {
    left: LeftArrow,
    right: RightArrow,
  },
};

export default data;
