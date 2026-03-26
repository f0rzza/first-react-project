import { QueryClient } from '@tanstack/react-query';
import { userDetailsQuery } from './queries';

// Doc: https://tkdodo.eu/blog/react-query-meets-react-router

// Loader for the user details page.
export const userDetailsLoader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: { id: string } }) => {
    // Get the defined query.
    const query = userDetailsQuery(params.id);
    // Get cached data from key or fetch them.
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };
