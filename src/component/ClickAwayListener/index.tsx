import React, { useEffect, useRef } from 'react';

type Props = {
  onClick: (event: MouseEvent | TouchEvent) => void;
  mouseEvent?: 'click' | 'mousedown' | 'mouseup' | false;
  touchEvent?: 'touchend' | 'touchstart' | false;
  children: React.ReactNode;
};

const ClickAwayListener: React.FC<Props> = ({
  onClick,
  mouseEvent = 'click',
  touchEvent = 'touchend',
  children,
  ...props
}: Props) => {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEvents = (event: MouseEvent | TouchEvent) => {
      if (node.current && node.current.contains(event.target as HTMLElement)) {
        return;
      }

      onClick(event);
    };

    if (mouseEvent) {
      document.addEventListener(mouseEvent, handleEvents);
    }

    return () => {
      if (mouseEvent) {
        document.removeEventListener(mouseEvent, handleEvents);
      }
    };
  }, [mouseEvent, onClick, touchEvent]);

  return (
    <div ref={node} {...props}>
      {children}
    </div>
  );
};

export default ClickAwayListener;
