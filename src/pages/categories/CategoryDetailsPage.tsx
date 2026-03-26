import { useLoaderData, useParams } from 'react-router-dom';
import { Layout } from '../../layouts/Layout';

export function CategoryDetailsPage() {
  const category = useLoaderData();

  return (
    <Layout>
      <p>
        Category n°{category.id} - {category.name} - Details
      </p>
    </Layout>
  );
}
