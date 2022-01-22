const callAll = <T extends ((v?: any) => void)[]>(...fns: T) => {
  return () => {
    fns.forEach((fn) => {
      if (typeof fn === 'function') fn();
    });
  };
};

export default callAll;
