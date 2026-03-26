import { Link, useParams } from 'react-router-dom';
import { Layout } from '../../layouts/Layout';
import { useQuery } from '@tanstack/react-query';
import { userDetailsQuery } from '../../utils/queries';

export function UserDetailsPage() {
  // Get ID from URL parameters.
  const { id = '' } = useParams();

  // Get cached data or fetch them.
  const { data, isError, isPending } = useQuery(userDetailsQuery(id));
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

      <div>
        <p>
          Navigation avec des balises {'<a>'}.
          <br />
          <strong>Perte du cache</strong> quand la page est rechargé.
        </p>
        <a href="http://localhost:5173/users/1">User1 (balise A)</a>
        <br />
        <a href="http://localhost:5173/users/2">User2 (balise A)</a>
      </div>

      <div>
        <p>
          Navigation avec des balises {'<Link>'} (react-router).
          <br />
          <strong>Le cache est conservé,</strong> pendant la navigation, selon le délai 'staletime'
          défini.
        </p>
        <Link to="/users/1">See User 1 (balise Link)</Link>
        <br />
        <Link to="/users/2">See User 2 (balise Link)</Link>
      </div>
    </Layout>
  );
}
