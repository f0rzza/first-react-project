import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage.js';
import { PostsPage } from './pages/posts/PostsPage.js';
import { PostDetailsPage } from './pages/posts/PostDetailsPage.js';
import { PostFormPage } from './pages/posts/PostFormPage.js';
import { CategoriesPage } from './pages/categories/CategoriesPage.js';
import { CategoryDetailsPage } from './pages/categories/CategoryDetailsPage.js';
import { ErrorPage } from './pages/ErrorPage.js';
import { AppError } from './components/errors/AppError.js';
import { UsersPage } from './pages/users/UsersPage.js';
import { UserDetailsPage } from './pages/users/UserDetailsPage.js';
import {
  authLoader,
  categoryPageLoader,
  composeLoaders,
  userDetailsLoader,
} from './utils/loaders.js';
import { queryClient } from './utils/queryClient.js';
import AlertList from './components/alerts/AlertList.jsx';
import { CharacterList } from './components/characters/CharacterList.jsx';
import { DemoLayout } from './layouts/DemoLayout.js';
import { CharacterListWithPagination } from './components/characters/CharacterListWithPagination.js';
import { RandomCharacter } from './components/characters/RandomCharacter.js';
import { TimerList } from './components/timers/TimerList.js';
import { OneButtonManyButtons } from './components/counter/OneCounterManyButtons.js';
import { Login } from './components/auth/Login.js';

const homeRoute = { path: '/', Component: HomePage };

// Post routes, with prefix.
const postRoutes = {
  path: 'posts',
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
  path: 'categories',
  children: [
    {
      index: true,
      Component: CategoriesPage,
    },
    {
      path: ':id',
      Component: CategoryDetailsPage,
      loader: categoryPageLoader,
      errorElement: <AppError />,
    },
    {
      path: ':id/edit',
      Component: CategoryDetailsPage, // Note: use details page for test
      loader: composeLoaders(authLoader(queryClient), categoryPageLoader),
      errorElement: <AppError />,
    },
  ],
};

// User routes, with prefix.
const userRoutes = {
  path: 'users',
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

// Demo routes, with prefix.
const demoRoutes = {
  path: 'demos',
  Component: DemoLayout, // Same layout for all Demos pages.
  errorElement: <AppError />,
  children: [
    {
      index: true,
      Component: CharacterListWithPagination, // Default demo
    },
    {
      path: 'auth',
      Component: Login,
    },
    {
      path: 'characters',
      children: [
        { index: true, Component: CharacterList },
        { path: 'list-with-pagination', Component: CharacterListWithPagination },
        { path: 'random', Component: RandomCharacter },
      ],
    },
    {
      path: 'misc',
      children: [
        { index: true, Component: AlertList },
        { path: 'timers', Component: TimerList },
        { path: 'one-counter-many-buttons', Component: OneButtonManyButtons },
      ],
    },
  ],
};

const commonRoutes = [
  // Errors. Keep this route if we want redirect on a specific page.
  { path: 'error/:code', Component: ErrorPage },
];

export const router = createBrowserRouter([
  homeRoute,
  postRoutes,
  categoryRoutes,
  userRoutes,
  demoRoutes,
  ...commonRoutes,
]);
