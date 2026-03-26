import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage.js';
import { PostsPage } from './pages/posts/PostsPage.js';
import { PostDetailsPage } from './pages/posts/PostDetailsPage.js';
import { PostFormPage } from './pages/posts/PostFormPage.js';
import { CategoriesPage } from './pages/categories/CategoriesPage.js';
import { CategoryDetailsPage } from './pages/categories/CategoryDetailsPage.js';
import { fetchCategory, fetchUser } from './utils/api.js';
import { ErrorPage } from './pages/ErrorPage.js';
import { AppError } from './components/errors/AppError.js';
import { UsersPage } from './pages/users/UsersPage.js';
import { UserDetailsPage } from './pages/users/UserDetailsPage.js';
import { QueryClient } from '@tanstack/react-query';
import { userDetailsLoader } from './utils/loaders.js';

const queryClient = new QueryClient();

const homeRoute = { path: '/', Component: HomePage };

// Post routes, with prefix.
const postRoutes = {
  path: '/posts',
  children: [
    {
      index: true,
      Component: PostsPage,
    },
    { path: ':id', Component: PostDetailsPage }, // Use ID directly in the component.
    { path: 'create', Component: PostFormPage },
    { path: ':id/edit', Component: PostFormPage },
  ],
};

// Category routes, with prefix.
const categoryRoutes = {
  path: '/categories',
  children: [
    {
      index: true,
      Component: CategoriesPage,
    },
    {
      path: ':id',
      Component: CategoryDetailsPage,
      // Note : use destructuring to get the params. Then, use loader to fetch category data here.
      loader: async ({ params }: { params: { id: string } }) => {
        let category = await fetchCategory(params.id);
        return category;
      },
      errorElement: <AppError />,
    },
  ],
};

// User routes, with prefix.
const userRoutes = {
  path: '/users',
  children: [
    {
      index: true,
      Component: UsersPage,
    },
    {
      path: ':id',
      Component: UserDetailsPage,
      // Loader without TanStack Query. Note : use 'useLoaderData' Hook in the component.
      // loader: async ({ params }: { params: { id: string } }) => fetchUser(params.id),
      // Loader with TanStack Query.
      loader: userDetailsLoader(queryClient),
      errorElement: <AppError />,
    },
  ],
};

const commonRoutes = [
  // Errors. Keep this route if we want redirect on a specific page.
  { path: '/error/:code', Component: ErrorPage },
];

export const router = createBrowserRouter([
  homeRoute,
  postRoutes,
  categoryRoutes,
  userRoutes,
  ...commonRoutes,
]);
