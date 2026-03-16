import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './../index.css';
import { PostDetails } from '../components/post/PostDetails';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostDetails />
  </StrictMode>,
);
