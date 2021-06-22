import { useReducer } from 'react';

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

const loopReducer = (state: State, action: Action) => {
  if (action.type === ActionTypes.PREV && state.active - 1 < 0) {
    return {
      ...state,
      desired: action.payload.length - 1,
      transitionEnabled: true,
    };
  }
  if (action.type === ActionTypes.NEXT && state.active + 1 > action.payload.length - 1) {
    return {
      ...state,
      desired: 0,
      transitionEnabled: true,
    };
  }
};

const carouselReducer = (state: State, action: Action) => {
  if (action.type === ActionTypes.PREV) {
    return {
      ...state,
      active: state.active - 1,
      desired: state.active - 1,
      transitionEnabled: true,
    };
  }
  if (action.type === ActionTypes.NEXT) {
    return {
      ...state,
      active: state.active + 1,
      desired: state.active + 1,
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
  displayCount,
}: {
  state: State;
  transitionTime: number;
  displayCount: number;
}) => {
  const smooth = `transform ${transitionTime}ms ease`;
  // The value determine the direction of translate
  const direction = Math.sign(state.desired - state.active);
  // The translate distance
  const shift = (100 / displayCount) * direction;

  return {
    transition: smooth,
    transform: `translateX(${shift}%)`,
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
    left: `-${(state.active + 1) * (100 / displayCount)}%`,
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
}

const useCarousel = ({ loop, length, displayCount }: CarouselProps) => {
  const reducer = loop ? combineReducers(carouselReducer, loopReducer) : carouselReducer;
  const [state, dispatch] = useReducer(reducer, {
    desired: 0,
    active: 0,
    transitionEnabled: false,
  });
  // The derived state define the transition style of carousel.
  const style = calcStyle({ state, displayCount, transitionTime: 400 });
  const getCarouselProps = () => ({ style, onTransitionEnd: () => dispatch({ type: ActionTypes.DONE }) });
  const onPrevClick = (length: number) => () => dispatch({ type: ActionTypes.PREV, payload: { length } });
  const onNextClick = (length: number) => () => dispatch({ type: ActionTypes.NEXT, payload: { length } });
  const onSpecificClick = (index: number) => () =>
    dispatch({ type: ActionTypes.SPECIFIC, payload: { desired: index } });
  const getPrevBtnProps = () => ({ onClick: onPrevClick(length), prev: true });
  const getNextBtnProps = () => ({ onClick: onNextClick(length), next: true });
  const getSpecificBtnProps = ({ index }: { index: number }) => ({
    active: index === state.active ? true : false,
    onClick: onSpecificClick(index),
  });
  return {
    getCarouselProps,
    getPrevBtnProps,
    getNextBtnProps,
    getSpecificBtnProps,
  };
};

export { useCarousel, loopReducer, carouselReducer };
