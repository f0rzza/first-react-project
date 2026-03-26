import { useParams } from 'react-router-dom';
import { Layout } from '../../layouts/Layout';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../../utils/api';

export function UserDetailsPage() {
  // Get ID from URL parameters.
  const { id = '' } = useParams();

  // Get cached data or fetch them.
  const { data, isError, isPending } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id),
    enabled: !!id, // fetch user only if id is defined
    retry: false, // TODO : retry query when error is not a 404
  });
  // Note : cannot use 'error' const from Hook because the fetch function return a 'Response', not an Error. (message and stack are empty)

  return (
    <Layout>
      {isPending && <p>Loading...</p>}

      {isError && <p>User Not Found</p>}

      {data && (
        <p>
          User n°{data.id} - {data.username} - Details
        </p>
      )}
    </Layout>
  );
}
