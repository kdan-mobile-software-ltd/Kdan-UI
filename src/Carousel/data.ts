import {
  LeftArrow,
  RightArrow,
  LeftArrowWhite,
  RightArrowWhite,
  LeftArrowSky,
  RightArrowSky,
  LeftArrowCampaign,
  RightArrowCampaign,
  ButtonLeft,
  ButtonRight,
  ButtonLeftBlack,
  ButtonRightBlack,
  ButtonLeftCampaign,
  ButtonRightCampaign,
} from '../Icon';

type Props = {
  btn: {
    [mode: string]: {
      [state: string]: {
        left: React.FC<React.SVGProps<SVGSVGElement>>;
        right: React.FC<React.SVGProps<SVGSVGElement>>;
      };
    };
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
    campaign: {
      left: LeftArrowCampaign,
      right: RightArrowCampaign,
    },
  },
};

export default data;
