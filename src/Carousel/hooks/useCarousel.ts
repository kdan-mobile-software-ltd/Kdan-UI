import { useState, useReducer } from 'react';
import useSwipe from './useSwipe';
import useInterval from './useInterval';
import callAllFunction from '../../helpers/callAllFunction';

enum ActionTypes {
  PREV = 'PREV',
  NEXT = 'NEXT',
  SPECIFIC = 'SPECIFIC',
  DONE = 'DONE',
}

type PrevAction = {
  type: ActionTypes.PREV;
  payload: {
    length: number;
  };
};

type NextAction = {
  type: ActionTypes.NEXT;
  payload: {
    length: number;
  };
};

type DONEAction = {
  type: ActionTypes.DONE;
};

type SpecificAction = {
  type: ActionTypes.SPECIFIC;
  payload: {
    desired: number;
  };
};

type Action = PrevAction | NextAction | SpecificAction | DONEAction;

type State = {
  desired: number;
  active: number;
  displayCount: number;
  transitionEnabled: boolean;
};

const combineReducers = (
  baseReducer: (state: State, action: Action) => State,
  ...restReducers: ((state: State, action: Action) => State | undefined)[]
) => {
  return (state: State, action: Action) => {
    for (const reducer of restReducers) {
      const result = reducer(state, action);
      if (result !== undefined) return result;
    }
    return baseReducer(state, action);
  };
};

const loopReducer = (state: State, action: Action): State | undefined => {
  if (action.type === ActionTypes.PREV && state.active - state.displayCount < 0) {
    return {
      ...state,
      desired: action.payload.length - state.displayCount,
      transitionEnabled: true,
    };
  }
  if (action.type === ActionTypes.NEXT && state.active + state.displayCount > action.payload.length - 1) {
    return {
      ...state,
      desired: 0,
      transitionEnabled: true,
    };
  }
};

const carouselReducer = (state: State, action: Action): State => {
  if (action.type === ActionTypes.PREV) {
    return {
      ...state,
      active: state.active - state.displayCount,
      desired: state.active - state.displayCount,
      transitionEnabled: true,
    };
  }
  if (action.type === ActionTypes.NEXT) {
    return {
      ...state,
      active: state.active + state.displayCount,
      desired: state.active + state.displayCount,
      transitionEnabled: true,
    };
  }
  if (action.type === ActionTypes.SPECIFIC)
    return {
      ...state,
      active: action.payload.desired,
      desired: action.payload.desired,
      transitionEnabled: true,
    };
  if (action.type === ActionTypes.DONE) {
    return {
      ...state,
      active: state.desired,
      transitionEnabled: false,
    };
  }
  throw new Error('Unhandled type in carouselReducer');
};

const calcTranslate = ({
  state,
  transitionTime = 400,
}: {
  state: State;
  transitionTime: number;
  displayCount: number;
}) => {
  const smooth = `transform ${transitionTime}ms ease`;
  // The value determine the direction of translate
  const direction = Math.sign(state.desired - state.active);

  return {
    transition: smooth,
    transform: `translateX(${direction >= 1 ? 100 : -100}%)`,
  };
};

const calcStyle = ({
  state,
  transitionTime,
  displayCount,
}: {
  state: State;
  transitionTime: number;
  displayCount: number;
}) => {
  return {
    transform: 'translateX(0)',
    // The actual moving style of item.
    left: `${-1 * (state.active + displayCount) * (100 / displayCount)}%`,
    ...(state.transitionEnabled && state.active === state.desired && { transition: `left ${transitionTime}ms` }),
    ...(state.transitionEnabled &&
      state.active !== state.desired &&
      calcTranslate({ state, transitionTime, displayCount })),
  };
};

interface CarouselProps {
  loop: boolean;
  length: number;
  displayCount: number;
  autoplay: number;
}

type ReturnProps = {
  onClick: () => void;
  next?: boolean;
  prev?: boolean;
  active?: boolean;
  disabled?: boolean;
};

const useCarousel = ({
  loop,
  length,
  displayCount,
  autoplay,
}: CarouselProps): {
  activeIndex: number;
  getCarouselProps: () => { style: any; onTransitionEnd: () => void };
  getPrevBtnProps: () => ReturnProps;
  getNextBtnProps: () => ReturnProps;
  getSpecificBtnProps: ({ index }: { index: number }) => ReturnProps;
  getSwipeProps: () => {
    onTouchStart: React.TouchEventHandler<HTMLDivElement>;
    onTouchMove: React.TouchEventHandler<HTMLDivElement>;
    onTouchEnd: React.TouchEventHandler<HTMLDivElement>;
  };
} => {
  const reducer = loop ? combineReducers(carouselReducer, loopReducer) : carouselReducer;
  const [state, dispatch] = useReducer(reducer, {
    desired: 0,
    active: 0,
    displayCount,
    transitionEnabled: false,
  });
  const [play, setPlay] = useState(autoplay > 0);
  // The derived state define the transition style of carousel.
  const style = calcStyle({ state, displayCount, transitionTime: 400 });
  const getCarouselProps = () => ({ style, onTransitionEnd: () => dispatch({ type: ActionTypes.DONE }) });
  const onPrevClick = (length: number) => () => dispatch({ type: ActionTypes.PREV, payload: { length } });
  const onNextClick = (length: number) => () => dispatch({ type: ActionTypes.NEXT, payload: { length } });
  const onSpecificClick = (index: number) => () =>
    dispatch({ type: ActionTypes.SPECIFIC, payload: { desired: index } });
  const onPause = () => setPlay(false);
  const getPrevBtnProps = () => ({
    onClick: callAllFunction(onPrevClick(length), onPause),
    prev: true,
    disabled: !loop && state.active === 0,
  });
  const getNextBtnProps = () => ({
    onClick: callAllFunction(onNextClick(length), onPause),
    next: true,
    disabled: !loop && state.active >= length - 1,
  });
  const getSpecificBtnProps = ({ index }: { index: number }) => ({
    active: index === Math.ceil(state.active / displayCount),
    onClick: callAllFunction(onSpecificClick(index * displayCount), onPause),
  });
  const getSwipeProps = () => ({
    ...useSwipe({
      leftCallback: callAllFunction(onNextClick(length), onPause),
      rightCallback: callAllFunction(onPrevClick(length), onPause),
    }),
  });
  useInterval(onNextClick(length), play ? autoplay : 0);

  return {
    activeIndex: state.active,
    getCarouselProps,
    getPrevBtnProps,
    getNextBtnProps,
    getSpecificBtnProps,
    getSwipeProps,
  };
};

export default useCarousel;
