import { useParams } from 'react-router-dom';
import { Layout } from '../../layouts/Layout';

export function PostDetailsPage() {
  const { id } = useParams();

  return (
    <Layout>
      <p>Post n°{id} - Details</p>
    </Layout>
  );
}
