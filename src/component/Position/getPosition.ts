const getViewportHeight = () => {
  const docEl = document.documentElement;
  return (docEl && docEl.clientHeight) || window.innerHeight || 0;
};

const getViewportWidth = () => {
  const docEl = document.documentElement;
  return (docEl && docEl.clientWidth) || window.innerWidth || 0;
};

const getViewportBounds = ({ top, right, bottom, left }: DOMRect, gutter: number) => {
  return {
    top: top >= 0 + gutter,
    left: left >= 0 + gutter,
    bottom: bottom <= getViewportHeight() - gutter,
    right: right <= getViewportWidth() - gutter,
  };
};

const shiftCoord = (coordName: string, coords: DOMRect, gutter: number) => {
  let shiftedCoord = {};

  if (coordName === 'left') {
    shiftedCoord = {
      ...coords,
      left: 0 + gutter,
    };
  }
  if (coordName === 'right') {
    const amountClipped = coords.right - getViewportWidth();
    const shiftedLeft = coords.left - amountClipped - gutter;

    shiftedCoord = {
      ...coords,
      left: shiftedLeft >= 0 ? shiftedLeft : 0 + gutter,
    };
  }

  return shiftedCoord;
};

const getCoords = (
  position: PositionType,
  targetRect: DOMRect,
  dropdownRect: DOMRect,
  gutter: number,
): CoordinatesType => {
  const coords = {
    'bottom left': {
      top: targetRect.bottom + gutter / 2,
      right: targetRect.left + dropdownRect.width,
      bottom: targetRect.bottom + gutter + dropdownRect.height,
      left: targetRect.left,
    },
    'bottom center': {
      top: targetRect.bottom + gutter / 2,
      right: targetRect.right - (targetRect.width - dropdownRect.width) / 2,
      bottom: targetRect.bottom + gutter + dropdownRect.height,
      left: targetRect.left + (targetRect.width - dropdownRect.width) / 2,
    },
    'bottom right': {
      top: targetRect.bottom + gutter / 2,
      right: targetRect.right,
      bottom: targetRect.bottom + gutter + dropdownRect.height,
      left: targetRect.right - dropdownRect.width,
    },
  };

  return coords[position];
};

const adjustPosition = (position: PositionType, coords: DOMRect, gutter: number) => {
  const viewportBounds = getViewportBounds(coords, gutter);
  const shouldMove = Object.keys(viewportBounds).some((key) => !viewportBounds[key as CoordNameType]);
  const shiftedCoords = coords;

  if (shouldMove) {
    Object.keys(viewportBounds).forEach((key) => {
      if (!viewportBounds[key as CoordNameType]) {
        Object.assign(shiftedCoords, shiftCoord(key, coords, gutter));
      }
    });
  }

  return shiftedCoords;
};

const getPosition = ({
  position,
  target,
  dropdown,
}: {
  position: PositionType;
  target: HTMLDivElement;
  dropdown: HTMLDivElement;
}): CoordinatesType => {
  const gutter = 16;

  const targetRect = target.getBoundingClientRect();
  const dropdownRect = dropdown.getBoundingClientRect();

  const coords = getCoords(position, targetRect, dropdownRect, gutter);
  const { left, top } = adjustPosition(position, coords as DOMRect, gutter);

  return { left, top };
};

export default getPosition;
