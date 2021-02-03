import { useState, useEffect } from "react";

const useWindowResize = (): undefined | number => {
  const [windowSize, setWindowSize] = useState<undefined | number>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowResize;
