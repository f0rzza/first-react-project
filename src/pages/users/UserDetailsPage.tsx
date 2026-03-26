import { useParams } from 'react-router-dom';
import { Layout } from '../../layouts/Layout';

export function UserDetailsPage() {
  // Get ID from URL parameters.
  const { id = '' } = useParams();

  return (
    <Layout>
      <p>User n°{id} - Details</p>
    </Layout>
  );
}
