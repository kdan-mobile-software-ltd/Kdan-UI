const callAll = (...fns: (() => void)[]) => {
  return () => {
    fns.forEach((fn) => {
      if (typeof fn === 'function') fn();
    });
  };
};

export default callAll;
