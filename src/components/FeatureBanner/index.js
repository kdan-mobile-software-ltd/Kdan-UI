import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';

import { BannerWrapper, BannerInner } from './styled';

const FeatureBanner = ({ banners, backgroundColors, offset, children }) => {
  const bannerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFixed, setFixed] = useState(false);
  const [bg, setBg] = useState([]);

  const checkVisible = (elm) => {
    const rect = elm.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const elemHeight = rect.height;

    return elemTop <= 0 && elemBottom >= elemHeight / 3;
  };

  const handleScrollEvent = () => {
    if (bannerRef.current && checkVisible(bannerRef.current)) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [isFixed]);

  useEffect(() => {
    if (backgroundColors[activeIndex]) {
      setBg(backgroundColors[activeIndex]);
    }
  }, [backgroundColors, activeIndex]);

  return (
    <BannerWrapper ref={bannerRef}>
      {banners.map((banner, index) => (
        <Waypoint
          key={`${backgroundColors[0]}-${index}`}
          onEnter={() => setActiveIndex(index)}
          bottomOffset={offset}
          topOffset={offset}
        >
          <BannerInner bg={bg}>
            {children({ banner, index, isFixed, activeIndex })}
          </BannerInner>
        </Waypoint>
      ))}
    </BannerWrapper>
  );
};

FeatureBanner.defaultProps = {
  offset: '10%'
};

FeatureBanner.propTypes = {
  /**
    banner 裡面需要資料，最後會返回 component 參數 banner。
   */
  banners: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
    每個 banner 裡面的顏色。如果每個 banner 都只要一種顏色，只需要在 array 裡面傳一種顏色即可。
   */
  backgroundColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
    距離下個 banner offset
   */
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default FeatureBanner;
