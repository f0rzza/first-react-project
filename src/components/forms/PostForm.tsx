import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { PostType } from '../../types/common';

type Props = {
  postId: string | undefined;
};

export function PostForm({ postId }: Props) {
  const [formData, setFormData] = useState<PostType>({
    title: '',
    content: '',
    published: false,
    authorId: 1, // TODO
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
    // Get correct 'value', if the current input is a checkbox or not.
    const value = 'checked' in target ? target.checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  }

  async function handleSubmit(e: MouseEvent) {
    e.preventDefault();

    // Call API request : post creation or update.
    const apiSuffix = postId ? `/${postId}` : ``;
    const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/posts${apiSuffix}`, {
      method: postId ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.log('api error');
      return;
    }

    const result = await response.json();
    console.log('api success', result);
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
      <div>
        <label htmlFor="published">Is published ?</label>
        <input
          type="checkbox"
          name="published"
          checked={formData.published}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Valider</button>
      </div>
    </form>
  );
}
