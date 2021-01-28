import React, { useEffect, useState, useRef } from "react";
import { useDrag } from "react-use-gesture";

import { ReactComponent as LeftArrow } from "../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow768 } from "../assets/icons/left-arrow-768.svg";
import { ReactComponent as RightArrow768 } from "../assets/icons/right-arrow-768.svg";

import {
  Wrapper,
  LeftBtn,
  RightBtn,
  ArrowBtn,
  ElementsContainer,
  ElementsOuter,
  ElementWrapper,
  Dot,
  DotWrapper,
} from "./styled";

export type CarouselProps = {
  items: { id: string; element: React.ReactNode }[];
  mode?: "dark" | "light";
  showDot?: boolean;
  showCount?: number;
};

const Carousel: React.FC<CarouselProps> = ({
  items,
  mode = "dark",
  showDot = true,
  showCount = 1,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveIndex((current) =>
      current < items.length - 1 ? current + 1 : current
    );
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current > 0 ? current - 1 : 0));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const bind = useDrag(({ active, direction: [xDir], distance }) => {
    if (!active && xDir < 0 && distance > 100) {
      handleNext();
    } else if (!active && xDir > 0 && distance > 100) {
      handlePrev();
    }
  });

  useEffect(() => {
    if (elementRef.current) {
      setContainerWidth(elementRef.current.clientWidth);
    }
  }, [elementRef]);

  return (
    <Wrapper>
      <LeftBtn mode={mode} isDisabled={activeIndex === 0} onClick={handlePrev}>
        <LeftArrow />
      </LeftBtn>
      <ElementsContainer {...bind()} width={containerWidth * showCount}>
        <ElementsOuter
          move={
            elementRef.current
              ? elementRef.current.clientWidth * activeIndex
              : 0
          }>
          {items.map((item) => (
            <ElementWrapper ref={elementRef} key={item.id}>
              {item.element}
            </ElementWrapper>
          ))}
        </ElementsOuter>
      </ElementsContainer>
      <RightBtn
        mode={mode}
        isDisabled={activeIndex === items.length - 1}
        onClick={handleNext}>
        <RightArrow />
      </RightBtn>
      <DotWrapper>
        <ArrowBtn onClick={handlePrev}>
          <LeftArrow768 />
        </ArrowBtn>
        {showDot &&
          items.map((item, index) => (
            <Dot
              isActive={activeIndex === index}
              key={`dot_${item.id}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        <ArrowBtn onClick={handleNext}>
          <RightArrow768 />
        </ArrowBtn>
      </DotWrapper>
    </Wrapper>
  );
};

export default Carousel;
