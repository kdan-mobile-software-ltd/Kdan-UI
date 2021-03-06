import React, { useEffect, useState, useRef } from "react";

import { LeftArrow, RightArrow, LeftArrow768, RightArrow768 } from "../Icon";

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
  showBorder?: boolean;
  showShadow?: boolean;
  displayCount?: number;
  loop?: boolean;
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  mode = "dark",
  showBorder = false,
  showDot = false,
  showShadow = false,
  displayCount = 1,
  loop = false,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moveDistance, setMoveDistance] = useState(0);
  const [slides, setSlides] = useState<React.ReactNode[]>([]);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const tempIndex = useRef(0);

  const getEleWidth = () => {
    if (elementRef.current) {
      return elementRef.current.clientWidth / displayCount;
    }
    return 0;
  };

  const slideGenerator = (start: number, end: number) => {
    const arr = [];
    for (let i = start; i <= end; i++) {
      if (i >= children.length) {
        arr.push(children[i - children.length]);
      } else {
        arr.push(children[i]);
      }
    }
    setSlides(arr);
  };

  const handleMove = (step: number) => {
    const eleWidth = getEleWidth();
    setMoveDistance((current) => current + -1 * step * eleWidth);
  };

  const handleNextDown = () => {
    if (slides.length > displayCount) return;

    setCurrentIndex((current) => {
      slideGenerator(current, current + displayCount);
      if (loop && current === children.length - 1) {
        tempIndex.current = 0;
        return 0;
      }
      if (current < children.length - 1) {
        tempIndex.current = current + 1;
        return current + 1;
      }
      tempIndex.current = current;
      return current;
    });
  };

  const handleNextUp = () => {
    if (transitionEnabled) return;

    setTransitionEnabled(true);
    handleMove(1);

    setTimeout(() => {
      slideGenerator(tempIndex.current, tempIndex.current + displayCount - 1);
      setMoveDistance(0);
      setTransitionEnabled(false);
    }, 310);
  };

  const handlePrevDown = () => {
    if (slides.length > displayCount) return;

    handleMove(1);

    setCurrentIndex((current) => {
      if (loop && current === 0) {
        const targetIndex = children.length - 1;
        slideGenerator(targetIndex, targetIndex + displayCount);
        tempIndex.current = targetIndex;
        return targetIndex;
      }
      if (current > 0) {
        const targetIndex = current - 1;
        tempIndex.current = targetIndex;
        slideGenerator(targetIndex, targetIndex + displayCount);
        return targetIndex;
      }
      tempIndex.current = 0;
      return 0;
    });
  };

  const handlePrevUp = () => {
    if (transitionEnabled) return;

    setTransitionEnabled(true);
    handleMove(-1);

    setTimeout(() => {
      slideGenerator(tempIndex.current, tempIndex.current + displayCount - 1);
      setTransitionEnabled(false);
    }, 310);
  };

  const handleDotDown = (targetIndex: number) => {
    if (slides.length > displayCount) return;

    tempIndex.current = currentIndex;

    if (currentIndex > targetIndex) {
      slideGenerator(targetIndex, currentIndex + displayCount - 1);
      handleMove(currentIndex - targetIndex);
    }
    if (currentIndex < targetIndex) {
      slideGenerator(currentIndex, targetIndex + displayCount - 1);
      setMoveDistance(0);
    }

    setCurrentIndex(targetIndex);
  };

  const handleDotUp = (targetIndex: number) => {
    if (transitionEnabled) return;

    setTransitionEnabled(true);

    if (targetIndex > tempIndex.current) {
      handleMove(targetIndex - tempIndex.current);
    } else {
      setMoveDistance(0);
    }

    setTimeout(() => {
      slideGenerator(targetIndex, targetIndex + displayCount - 1);
      setMoveDistance(0);
      setTransitionEnabled(false);
    }, 310);
  };

  useEffect(() => {
    slideGenerator(0, 0 + displayCount - 1);
  }, []);

  return (
    <Wrapper>
      {children.length > 1 && (
        <LeftBtn
          data-testid="prev-btn"
          mode={mode}
          isDisabled={loop ? false : currentIndex === 0}
          onMouseDown={handlePrevDown}
          onMouseUp={handlePrevUp}>
          {LeftArrow && <LeftArrow />}
        </LeftBtn>
      )}
      <ElementsContainer
        ref={elementRef}
        showBorder={showBorder}
        showShadow={showShadow}>
        <ElementsOuter
          playing={transitionEnabled}
          width={`${(100 * slides.length) / displayCount}%`}
          move={moveDistance}>
          {Array.isArray(slides) &&
            slides.map((item: React.ReactNode, index: number) => (
              <ElementWrapper key={`element_${index}`}>{item}</ElementWrapper>
            ))}
        </ElementsOuter>
      </ElementsContainer>
      {children.length > 1 && (
        <RightBtn
          data-testid="next-btn"
          mode={mode}
          isDisabled={loop ? false : currentIndex === children.length - 1}
          onMouseDown={handleNextDown}
          onMouseUp={handleNextUp}>
          {RightArrow && <RightArrow />}
        </RightBtn>
      )}
      {children.length > 1 && (
        <DotWrapper data-testid="dots">
          <ArrowBtn onMouseDown={handlePrevDown} onMouseUp={handlePrevUp}>
            {LeftArrow768 && <LeftArrow768 />}
          </ArrowBtn>
          {showDot &&
            Array.isArray(children) &&
            children.map((_, index) => (
              <Dot
                isActive={currentIndex === index}
                key={`dot_${index}`}
                onMouseDown={() => handleDotDown(index)}
                onMouseUp={() => handleDotUp(index)}
              />
            ))}
          <ArrowBtn onMouseDown={handleNextDown} onMouseUp={handleNextUp}>
            {RightArrow768 && <RightArrow768 />}
          </ArrowBtn>
        </DotWrapper>
      )}
    </Wrapper>
  );
};

export default Carousel;
