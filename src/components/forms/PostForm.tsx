import { ChangeEvent, useState } from 'react';
import { PostType } from '../../types/common';

type Props = {
  postData?: PostType;
};

export function PostForm({ postData }: Props) {
  const [formData, setFormData] = useState<PostType>({
    title: postData?.title || '',
    content: postData?.content || '',
  });

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
