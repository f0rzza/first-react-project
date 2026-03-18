import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage.js';
import { PostsPage } from './pages/PostsPage.js';
import { PostDetailsPage } from './pages/PostDetailsPage.js';

const homeRoute = { path: '/', Component: HomePage };

// Post routes, with prefix.
const postRoutes = {
  path: '/posts',
  children: [
    {
      index: true,
      Component: PostsPage,
    },
    { path: ':id', Component: PostDetailsPage },
  ],
};

export const router = createBrowserRouter([homeRoute, postRoutes]);
