import React from 'react';
import { createRoot } from 'react-dom/client';

const Game = () => {
  return (
    <p></p>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Game />);
