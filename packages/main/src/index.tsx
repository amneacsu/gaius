import React from 'react';
import { createRoot } from 'react-dom/client';
import { StageProvider, WorldProvider } from '@gaius/core';

import { Debug } from './Debug';
import { ErrorBoundary } from './ErrorBoundary';
import { StageView } from './StageView';

const Main = () => {
  return (
    <ErrorBoundary>
      <WorldProvider>
        <StageProvider>
          <Debug />
          <StageView />
        </StageProvider>
      </WorldProvider>
    </ErrorBoundary>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
