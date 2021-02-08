import React, { useState, useRef } from "react";
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
  children: React.ReactNode[];
  mode?: "dark" | "light";
  showDot?: boolean;
  showCount?: number;
  showBorder?: boolean;
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  mode = "dark",
  showBorder = false,
  showDot = false,
  showCount = 1,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveIndex((current) =>
      current < children.length - 1 ? current + 1 : current
    );
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current > 0 ? current - 1 : 0));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const bind = useDrag(({ active, direction: [xDir], distance }) => {
    if (!active && xDir < 0 && distance > 80) {
      handleNext();
    } else if (!active && xDir > 0 && distance > 80) {
      handlePrev();
    }
  });

  return (
    <Wrapper>
      <LeftBtn mode={mode} isDisabled={activeIndex === 0} onClick={handlePrev}>
        <LeftArrow />
      </LeftBtn>
      <ElementsContainer {...bind()} ref={elementRef} showBorder={showBorder}>
        <ElementsOuter
          width={`${(100 * children.length || 1) / showCount}%`}
          move={
            elementRef.current
              ? (elementRef.current.clientWidth / showCount) * activeIndex
              : 0
          }>
          {Array.isArray(children) &&
            children.map((item, index) => (
              <ElementWrapper key={`element_${index}`}>{item}</ElementWrapper>
            ))}
        </ElementsOuter>
      </ElementsContainer>
      <RightBtn
        mode={mode}
        isDisabled={activeIndex === children.length - 1}
        onClick={handleNext}>
        <RightArrow />
      </RightBtn>
      <DotWrapper>
        <ArrowBtn onClick={handlePrev}>
          <LeftArrow768 />
        </ArrowBtn>
        {showDot &&
          Array.isArray(children) &&
          children.map((_, index) => (
            <Dot
              isActive={activeIndex === index}
              key={`dot_${index}`}
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
