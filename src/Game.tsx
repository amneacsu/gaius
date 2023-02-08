import React from 'react';
import { createRoot } from 'react-dom/client';
import { useWorld, WorldProvider } from './WorldContext';

const Counter = () => {
  const world = useWorld();
  return <div>Entity count: {world.entities.length}</div>;
};

const Adder = () => {
  const world = useWorld();
  const addEnt = () => world.createEntity();
  return <button onClick={addEnt}>Add entity</button>;
};

const Game = () => {
  const [, sc] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => sc((p) => p + 1), 1000 / 60);
  }, []);

  return (
    <WorldProvider>
      <Counter />
      <Adder />
    </WorldProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Game />);
