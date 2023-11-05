import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@gaius/ui';
import { createWorld } from '@gaius/world';

import './style.css';

const world = createWorld();
setInterval(() => world.execute(), 1000);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Button>Click</Button>
  </React.StrictMode>,
);
