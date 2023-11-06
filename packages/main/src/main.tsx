import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';
import { WorldProvider } from './core/index.ts';

import { DebugScreen } from './DebugScreen/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WorldProvider>
      <DebugScreen />
    </WorldProvider>
  </React.StrictMode>,
);
