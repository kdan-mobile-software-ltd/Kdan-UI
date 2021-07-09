import React, { Children } from 'react';
import {
  CarouselContainer,
  OverFlow,
  Carousel,
  CarouselItem,
  Button,
  ArrowButton,
  DotButton,
  SmallController,
  DotGroup,
  LeftBtn,
  RightBtn,
} from './styled';
import { useCarousel } from './hooks';
import { LeftArrow, RightArrow, ButtonLeft, ButtonRight } from '../Icon';

const generateItems = (slides: React.ReactNode[], type: string, displayCount = 1) => {
  if (type === 'before') return <CarouselItem displayCount={displayCount}>{slides[slides.length - 1]}</CarouselItem>;
  if (type === 'actual') {
    return [...slides, ...slides.slice(0, displayCount - 1)].map((slide, index) => (
      <CarouselItem key={index} displayCount={displayCount}>
        {slide}
      </CarouselItem>
    ));
  }
  if (type === 'after') {
    return <CarouselItem displayCount={displayCount}>{slides[displayCount - 1]}</CarouselItem>;
  }
};

export type CarouselProps = {
  children: React.ReactNode;
  loop?: boolean;
  displayCount?: number;
  showIndicators?: boolean;
  mode?: string;
};

const CarouselComp: React.FC<CarouselProps> = ({
  children,
  loop = false,
  displayCount = 1,
  showIndicators = false,
  mode = 'dark',
}: CarouselProps) => {
  const slides = Children.toArray(children);
  // The pseudo last item before the first item
  const beforeItems = generateItems(slides, 'before', displayCount);
  // The actual carousel items
  const actualItems = generateItems(slides, 'actual', displayCount);
  // The pseudo first item after the last item
  const afterItems = generateItems(slides, 'after', displayCount);
  const { activeIndex, getCarouselProps, getPrevBtnProps, getNextBtnProps, getSpecificBtnProps } = useCarousel({
    loop,
    length: Array.isArray(actualItems) ? (displayCount > 1 ? actualItems.length - 1 : actualItems.length) : 0,
    displayCount,
  });

  return (
    <CarouselContainer>
      <LeftBtn
        type="button"
        {...getPrevBtnProps()}
        data-testid="prev-btn"
        mode={mode}
        isDisabled={!loop && activeIndex === 0}
      >
        {ButtonLeft && <ButtonLeft />}
      </LeftBtn>
      <OverFlow>
        <Carousel {...getCarouselProps()} data-testid="carousel">
          {beforeItems}
          {actualItems}
          {afterItems}
        </Carousel>
      </OverFlow>
      <RightBtn
        type="button"
        {...getNextBtnProps()}
        data-testid="next-btn"
        mode={mode}
        isDisabled={!loop && activeIndex >= slides.length - 1}
      >
        {ButtonRight && <ButtonRight />}
      </RightBtn>
      <SmallController data-testid="dots" visible={showIndicators}>
        <ArrowButton {...getPrevBtnProps()}>{LeftArrow && <LeftArrow />}</ArrowButton>
        <DotGroup>
          {slides.map((el, i) => (
            <DotButton key={i} {...getSpecificBtnProps({ index: i })}>
              &nbsp;
            </DotButton>
          ))}
        </DotGroup>
        <ArrowButton {...getNextBtnProps()}>{RightArrow && <RightArrow />}</ArrowButton>
      </SmallController>
    </CarouselContainer>
  );
};

export default CarouselComp;
