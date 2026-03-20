import { useParams } from 'react-router-dom';
import { PostForm } from '../components/forms/PostForm';
import { Layout } from '../layouts/Layout';

export function PostFormPage() {
  const { id } = useParams();

  return (
    <Layout>
      <h1>{id ? 'Edit post' : 'Create post'}</h1>
      <PostForm postId={id} />
    </Layout>
  );
}
