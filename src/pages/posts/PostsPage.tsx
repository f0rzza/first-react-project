import { PostSection } from '../../components/posts/PostSection';
import { Layout } from '../../layouts/Layout';

export function PostsPage() {
  return (
    <Layout>
      <h1>List of Posts</h1>
      <h2>With API & Hooks: useEffect, useReducer, useState</h2>

      <PostSection />
    </Layout>
  );
}
