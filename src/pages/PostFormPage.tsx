import { useParams } from 'react-router-dom';
import { PostForm } from '../components/forms/PostForm';
import { Layout } from '../layouts/Layout';

export function PostFormPage() {
  const { id } = useParams();
  const data = id ? { title: 'mon titre', content: 'mon contenu' } : undefined;
  // TODO : get post data from ID.

  return (
    <Layout>
      <h1>{id ? 'Edit post' : 'Create post'}</h1>
      <PostForm postData={data} />
    </Layout>
  );
}
