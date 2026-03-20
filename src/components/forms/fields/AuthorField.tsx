import { ChangeEvent, use, useEffect, useState } from 'react';
import { UserType } from '../../../types/common';
import { AuthContext } from '../../../contexts/AuthContext';

type Props = { selectedValue: number | string; onAuthorChange: (e: ChangeEvent) => void };

export function AuthorField({ selectedValue, onAuthorChange }: Props) {
  const [authors, setAuthors] = useState<Array<UserType>>([]);
  const { user } = use(AuthContext);

  // Get list of users after component is mounted.
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/users`);

      if (!response.ok) {
        return;
      }

      const results = await response.json();
      setAuthors(results);
    }

    fetchData();
  }, []);

  return (
    <div>
      <label htmlFor="authorId">Author</label>
      <select name="authorId" value={selectedValue} onChange={onAuthorChange}>
        <option value="">Select an author</option>
        {authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.username} {author.id === user?.id ? '(me)' : ''}
          </option>
        ))}
      </select>
    </div>
  );
}
