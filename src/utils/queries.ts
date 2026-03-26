import { fetchUser } from './api';

// Doc: https://tkdodo.eu/blog/react-query-meets-react-router

// Define query for the user details page.
export const userDetailsQuery = (id: string) => ({
  queryKey: ['user', id],
  queryFn: () => fetchUser(id),
});
