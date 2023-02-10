import React from 'react';

export const useTicker = () => {
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setTick((t) => t + 1), 1000 / 60);
    return () => clearInterval(t);
  }, []);

  return tick;
};
