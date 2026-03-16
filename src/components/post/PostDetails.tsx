import { useEffect, useState } from 'react';
import { PostType } from '../../types/common';

export function PostDetails() {
  const [post, setPost] = useState<PostType>({
    title: '',
    content: '',
    createdAt: undefined,
    updatedAt: undefined,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Get ID from URL.
      // Note: move this part in a parent component ? (PostTemplate, oth.)
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');

      if (!id) {
        window.location.href = '/404.html';
      }

      const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/posts/${id}`);

      if (!response.ok) {
        window.location.href = '/404.html';
      }

      const result = await response.json();

      // Note : use toLocaleString() fct here ?
      const post: PostType = {
        ...result,
        createdAt: new Date(result.createdAt),
        updatedAt: new Date(result.updatedAt),
      };

      // Update post data.
      setPost(post);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <section>
      {!loading ? (
        <div>
          <h1>{post.title}</h1>

          <p>{post.content}</p>

          {(post.createdAt || post.updatedAt) && (
            <div>
              {post.createdAt && <span>{post.createdAt.toLocaleString()}</span>}
              <br />
              {post.updatedAt && <span>{post.updatedAt.toLocaleString()}</span>}
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
