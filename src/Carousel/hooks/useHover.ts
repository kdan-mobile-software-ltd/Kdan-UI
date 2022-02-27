import { useState } from 'react';

const useHover = () => {
  const [hover, setHover] = useState([false, false]);

  const onHover = (index: number) => () => {
    const state = [...hover];
    state[index] = true;
    setHover(state);
  };

  const onNormal = (index: number) => () => {
    const state = [...hover];
    state[index] = false;
    setHover(state);
  };

  const getHoverBtnProps = (index: number) => ({
    onMouseEnter: onHover(index),
    onMouseLeave: onNormal(index),
  });

  return { hover, getHoverBtnProps };
};

export default useHover;
