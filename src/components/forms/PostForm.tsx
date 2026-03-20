import { ChangeEvent, useEffect, useState } from 'react';
import { PostType } from '../../types/common';

type Props = {
  postId: string | undefined;
};

export function PostForm({ postId }: Props) {
  const [formData, setFormData] = useState<PostType>({
    title: '',
    content: '',
  });

  useEffect(() => {
    if (postId) {
      async function fetchData(id: string) {
        const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/posts/${id}`);

        if (!response.ok) {
          console.log('api error');
          return;
        }

        const result = await response.json();
        setFormData(result);
      }

      fetchData(postId);
    }
  }, [postId]);

  function handleChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
