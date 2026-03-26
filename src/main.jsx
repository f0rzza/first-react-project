import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AuthProvider } from './contexts/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { TsQueryProvider } from './providers/QueryClientProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TsQueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </TsQueryProvider>
  </StrictMode>,
);
