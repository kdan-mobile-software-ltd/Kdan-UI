import { useState } from 'react';

type SwipeProps = {
  leftCallback: () => void;
  rightCallback: () => void;
};

const useSwipe = ({ leftCallback, rightCallback }: SwipeProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart - touchEnd > 150) leftCallback();
    if (touchStart - touchEnd < -150) rightCallback();
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};

export default useSwipe;
