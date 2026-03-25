import { useParams } from 'react-router-dom';
import { Layout } from '../layouts/Layout';

export function ErrorPage() {
  const { code } = useParams();

  return (
    <Layout>
      <h1>{code}</h1>
      <p>
        <a href="/">Back to the homepage</a>
      </p>
    </Layout>
  );
}
