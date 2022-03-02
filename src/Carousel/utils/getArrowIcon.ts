import data from '../data';

type Props = { mode: 'dark' | 'light' | 'campaign'; direction: 'left' | 'right' };

const getArrowIcon = ({ mode, direction }: Props) => {
  if (data.btn[mode])
    return {
      normal: data.btn[mode].normal[direction],
      hover: data.btn[mode].hover[direction],
    };
  return {
    normal: data.btn.dark.normal[direction],
    hover: data.btn.dark.hover[direction],
  };
};

export default getArrowIcon;
