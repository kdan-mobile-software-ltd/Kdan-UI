import React, { useRef, useEffect, useState } from "react";

import getPosition from "./getPosition";

type PositionProps = {
  children: (
    childrenRef: React.MutableRefObject<HTMLDivElement | null>,
    coordinates: CoordinatesType
  ) => React.ReactElement;
  position: PositionType;
  target: React.MutableRefObject<HTMLDivElement | null>;
};

const Position = ({ children, position, target }: PositionProps): any => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    if (target.current && childrenRef.current) {
      const coords = getPosition({
        position,
        target: target.current as HTMLDivElement,
        dropdown: childrenRef.current as HTMLDivElement,
      });

      setCoordinates(coords);
    }
  }, [childrenRef]);

  return children(childrenRef, coordinates);
};

export default Position;
