import { useParams } from 'react-router-dom';
import { PostForm } from '../components/forms/PostForm';
import { Layout } from '../layouts/Layout';
import { use, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function PostFormPage() {
  const { id } = useParams();
  const { checkAuthentication } = use(AuthContext);

  // Check if user is authenticated after page component is mounted.
  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <Layout>
      <h1>{id ? 'Edit post' : 'Create post'}</h1>
      <PostForm postId={id} />
    </Layout>
  );
}
