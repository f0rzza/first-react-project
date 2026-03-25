import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage.js';
import { PostsPage } from './pages/PostsPage.js';
import { PostDetailsPage } from './pages/PostDetailsPage.js';
import { PostFormPage } from './pages/PostFormPage.js';
import { CategoriesPage } from './pages/CategoriesPage.js';
import { CategoryDetailsPage } from './pages/CategoryDetailsPage.js';
import { fetchCategory } from './utils/api.js';
import { ErrorPage } from './pages/ErrorPage.js';
import { AppError } from './components/errors/AppError.js';

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

const commonRoutes = [
  // Errors. Keep this route if we want redirect on a specific page.
  { path: '/error/:code', Component: ErrorPage },
];

export const router = createBrowserRouter([homeRoute, postRoutes, categoryRoutes, ...commonRoutes]);
