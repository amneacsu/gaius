import React from 'react';
import { createRoot } from 'react-dom/client';

import { Debug } from './Debug';
import { ErrorBoundary } from './ErrorBoundary';
import { StageProvider } from './StageContext';
import { StageView } from './StageView';
import { WorldProvider } from './WorldContext';

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
