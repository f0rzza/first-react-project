import { QueryClient } from '@tanstack/react-query';
import { fetchMeQuery, userDetailsQuery } from './queries';
import { LoaderFunction, LoaderFunctionArgs, redirect } from 'react-router-dom';
import { fetchCategory } from './api';

// Doc: https://tkdodo.eu/blog/react-query-meets-react-router

// Loader for the user details page.
export const userDetailsLoader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params }: LoaderFunctionArgs) => {
    const id = params.id;
    if (!id) throw new Error('Missing ID');
    // Get the defined query.
    const query = userDetailsQuery(id);
    // Get cached data from key or fetch them.
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };

// Loader for the category details page.
// Note : use destructuring to get the params from the LoaderFunction args.
export const categoryPageLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  if (!id) throw new Error('Missing ID');
  return await fetchCategory(id); // TODO: use React Query.
};

// Middleware-like to check authentication.
export const authLoader =
  (queryClient: QueryClient): LoaderFunction =>
  async () => {
    // Get the defined query.
    const query = fetchMeQuery();
    // Get cached data from key or fetch them.
    const isAuth =
      queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
    // Redirect not authenticated user.
    if (!isAuth) throw redirect('/');
    // Return nothing to continue with the next loader.
    return null;
  };

// Alternative solution to use 'loaders' as 'middlewares'.
// Note: route middlewares are not fully supported by react-router-dom
export function composeLoaders(...loaders: Array<LoaderFunction>): LoaderFunction {
  return async (args: LoaderFunctionArgs) => {
    for (const loader of loaders) {
      const result = await loader(args);
      if (result) return result;
    }
    return null;
  };
}
