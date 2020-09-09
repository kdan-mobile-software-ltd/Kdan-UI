import React from 'react';

import FeatureBanner from './';
import FeatureScrollBar from '../FeatureScrollBar';
import Flex from '../Flex';

export default {
  component: FeatureBanner,
  title: 'FeatureBanner',
  parameters: {
    docs: {
      description: {
        component: `視覺滾動差 Banner。  
          UI 參考: [Kdan PDF Reader](https://www.kdanmobile.com/zh-tw/pdf-reader)`
      }
    }
  }
};

export const Base = (args) => (
  <FeatureBanner {...args}>{() => <div />}</FeatureBanner>
);
Base.args = {
  backgroundColors: ['#f5a623', '#fe8967', '#67b2fe'],
  banners: [{}, {}, {}]
};

export const WithScrollBar = () => {
  const backgroundColors = ['#f5a623', '#fe8967', '#67b2fe'];
  const banners = [
    {
      title: 'banner'
    },
    {
      title: 'banner'
    },
    {
      title: 'banner'
    }
  ];

  return (
    <FeatureBanner backgroundColors={backgroundColors} banners={banners}>
      {({ banner, index, isFixed, activeIndex }) => (
        <Flex justifyContent='center' alignItems='center' height='100%'>
          <h1>{`${banner.title}-${index + 1}`}</h1>
          <FeatureScrollBar
            top='50%'
            right='150px'
            isFixed={isFixed}
            max={banners.length}
            now={activeIndex + 1}
          />
        </Flex>
      )}
    </FeatureBanner>
  );
};
