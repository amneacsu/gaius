import React from 'react';
import { createRoot } from 'react-dom/client';

import { Debug } from './Debug';
import { ErrorBoundary } from './ErrorBoundary';
import { StageProvider } from './StageContext';
import { StageView } from './StageView';
import { WorldProvider } from './WorldContext';
import './styles.css';

import { BaseDirectory, createDir } from '@tauri-apps/api/fs';

const createDataFolder = async () => {
  await createDir('data', {
    dir: BaseDirectory.Desktop,
    recursive: true,
  });
};

createDataFolder();

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

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
