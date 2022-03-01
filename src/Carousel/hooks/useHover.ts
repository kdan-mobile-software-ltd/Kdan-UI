import { useState } from 'react';

const useHover = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onNormal = () => {
    setHover(false);
  };

  const getHoverBtnProps = () => ({
    onMouseEnter: onHover,
    onMouseLeave: onNormal,
  });

  return { hover, getHoverBtnProps };
};

export default useHover;
