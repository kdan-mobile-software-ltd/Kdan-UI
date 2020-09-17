import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BarOuter, Bar } from './styled';

const FeatureScrollBar = ({ max, now, isFixed, top, left, right }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (now <= max && now >= 0) {
      setHeight((now / max) * 100);
    }
  }, [now]);

  return (
    <BarOuter isFixed={isFixed} top={top} left={left} right={right}>
      <Bar data-testid='bar' barHeight={height} />
    </BarOuter>
  );
};

FeatureScrollBar.defaultProps = {
  max: 3,
  now: 1,
  isFixed: false,
  top: '0px',
  left: 'unset',
  right: 'unset'
};

FeatureScrollBar.propTypes = {
  /**
    scroll bar 最大數值
  */
  max: PropTypes.number,
  /**
    scroll bar 現在目前數值
  */
  now: PropTypes.number,
  /**
    是否開啟 position:fixed 設定
  */
  isFixed: PropTypes.bool,
  /**
    如果 isFixed 是 true 會設定 css top 屬性。
   */
  top: PropTypes.string,
  /**
    如果 isFixed 是 true 會設定 css left 屬性。
   */
  left: PropTypes.string,
  /**
    如果 isFixed 是 true 會設定 css right 屬性。
   */
  right: PropTypes.string
};

export default FeatureScrollBar;
