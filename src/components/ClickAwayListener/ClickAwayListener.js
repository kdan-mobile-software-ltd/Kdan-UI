import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ClickAwayListener = ({
  onClick,
  mouseEvent,
  touchEvent,
  children,
  ...props
}) => {
  const node = useRef(null);

  useEffect(() => {
    const handleEvents = (event) => {
      if (node.current && node.current.contains(event.target)) {
        return;
      }

      onClick(event);
    };

    document.addEventListener(mouseEvent, handleEvents);

    return () => {
      document.removeEventListener(mouseEvent, handleEvents);
    };
  }, [mouseEvent, onClick, touchEvent]);

  return (
    <div ref={node} {...props}>
      {children}
    </div>
  );
};

ClickAwayListener.defaultProps = {
  mouseEvent: 'click',
  touchEvent: 'touchend'
};

ClickAwayListener.prototype = {
  onClick: PropTypes.func.isRequired,
  mouseEvent: PropTypes.string,
  touchEvent: PropTypes.string
};

export { ClickAwayListener };
