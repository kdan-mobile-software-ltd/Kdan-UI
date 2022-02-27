import React, { Children } from 'react';
import {
  CarouselContainer,
  OverFlow,
  Carousel,
  CarouselItem,
  ArrowButton,
  DotButton,
  SmallController,
  DotGroup,
  LeftBtn,
  RightBtn,
} from './styled';
import useCarousel from './hooks/useCarousel';
import useHover from './hooks/useHover';
import getArrowIcon from './utils/getArrowIcon';
import getIndicator from './utils/getIndicator';

const generateItems = (slides: React.ReactNode[], type: string, displayCount = 1) => {
  if (type === 'before') {
    const remainder = slides.length % displayCount;
    const insufficientAmount = remainder ? displayCount - (slides.length % displayCount) : 0;
    const composeArray = [...slides, ...Array(insufficientAmount)];
    return [...composeArray.slice(composeArray.length - displayCount, composeArray.length)].map((slide, index) => (
      <CarouselItem key={`before_${index}`} displayCount={displayCount}>
        {slide}
      </CarouselItem>
    ));
  }
  if (type === 'actual') {
    const insufficientAmount = slides.length % displayCount ? displayCount - (slides.length % displayCount) : 0;
    return [...slides, ...Array(insufficientAmount)].map((slide, index) => (
      <CarouselItem key={index} displayCount={displayCount}>
        {slide}
      </CarouselItem>
    ));
  }
  if (type === 'after') {
    return [...slides.slice(0, displayCount)].map((slide, index) => (
      <CarouselItem key={`after_${index}`} displayCount={displayCount}>
        {slide}
      </CarouselItem>
    ));
  }
};

export type CarouselProps = {
  children: React.ReactNode;
  loop?: boolean;
  displayCount?: number;
  showIndicators?: boolean;
  mode?: 'dark' | 'light' | 'campaign';
  indicatorMode?: 'dark' | 'light' | 'sky';
  autoplay?: number;
};

const CarouselComp: React.FC<CarouselProps> = ({
  children,
  loop = false,
  displayCount = 1,
  showIndicators = false,
  mode = 'dark',
  indicatorMode = 'dark',
  autoplay = 0,
}: CarouselProps) => {
  const slides = Children.toArray(children);
  // The pseudo last item before the first item
  const beforeItems = generateItems(slides, 'before', displayCount);
  // The actual carousel items
  const actualItems = generateItems(slides, 'actual', displayCount);
  // The pseudo first item after the last item
  const afterItems = generateItems(slides, 'after', displayCount);
  const {
    activeIndex,
    getCarouselProps,
    getPrevBtnProps,
    getNextBtnProps,
    getSpecificBtnProps,
    getSwipeProps,
  } = useCarousel({
    loop,
    length: Array.isArray(actualItems) ? actualItems.length : 0,
    displayCount,
    autoplay: autoplay > 0 ? autoplay : 0,
  });
  const { hover, getHoverBtnProps } = useHover();
  const indicator = getIndicator({ indicatorMode });
  const leftArrowIcon = getArrowIcon({ mode, direction: 'left' });
  const rightArrowIcon = getArrowIcon({ mode, direction: 'right' });

  return (
    <CarouselContainer>
      {slides.length > displayCount && (
        <LeftBtn
          type="button"
          data-testid="prev-btn"
          mode={mode}
          isDisabled={!loop && activeIndex === 0}
          isHover={hover[0]}
          {...getPrevBtnProps()}
          {...getHoverBtnProps(0)}
        >
          {leftArrowIcon.hover && <leftArrowIcon.hover />}
          {leftArrowIcon.normal && <leftArrowIcon.normal />}
        </LeftBtn>
      )}
      <OverFlow>
        <Carousel {...getCarouselProps()} {...getSwipeProps()} data-testid="carousel">
          {beforeItems}
          {actualItems}
          {afterItems}
        </Carousel>
      </OverFlow>
      {slides.length > displayCount && (
        <RightBtn
          type="button"
          data-testid="next-btn"
          mode={mode}
          isDisabled={!loop && activeIndex >= slides.length - displayCount}
          isHover={hover[1]}
          {...getNextBtnProps()}
          {...getHoverBtnProps(1)}
        >
          {rightArrowIcon.hover && <rightArrowIcon.hover />}
          {rightArrowIcon.normal && <rightArrowIcon.normal />}
        </RightBtn>
      )}
      {slides.length > displayCount && (
        <SmallController data-testid="dots" visible={showIndicators}>
          <ArrowButton {...getPrevBtnProps()}>{indicator.left && <indicator.left />}</ArrowButton>
          <DotGroup>
            {[...Array(Math.ceil(slides.length / displayCount))].map((el, i) => (
              <DotButton key={i} {...getSpecificBtnProps({ index: i })} indicatorMode={indicatorMode}>
                &nbsp;
              </DotButton>
            ))}
          </DotGroup>
          <ArrowButton {...getNextBtnProps()}>{indicator.right && <indicator.right />}</ArrowButton>
        </SmallController>
      )}
    </CarouselContainer>
  );
};

export default CarouselComp;
