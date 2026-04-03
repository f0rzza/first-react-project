import { fetchMe, fetchUser } from './api';

// Doc: https://tkdodo.eu/blog/react-query-meets-react-router

// Define query for the user details page.
export const userDetailsQuery = (id: string) => ({
  queryKey: ['user', id],
  queryFn: () => fetchUser(id),
  staleTime: 1000 * 60, // 1 min
});

// Define query for the check authentication API call.
export const fetchMeQuery = () => ({
  queryKey: ['me'],
  queryFn: () => fetchMe(),
  staleTime: 1000 * 60, // 1 min
});
