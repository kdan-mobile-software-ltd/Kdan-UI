import data from '../data';

type Props = {
  indicatorMode: 'dark' | 'light' | 'sky';
};

const getIndicator = ({ indicatorMode }: Props) => {
  if (data.indicator[indicatorMode])
    return {
      left: data.indicator[indicatorMode].left,
      right: data.indicator[indicatorMode].right,
    };
  return {
    left: data.indicator.dark.left,
    right: data.indicator.dark.right,
  };
};

export default getIndicator;
