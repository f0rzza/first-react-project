import { use, useEffect, useState } from 'react';
import { UserType } from '../../../types/common';
import { AuthContext } from '../../../contexts/AuthContext';

export function AuthorField() {
  const [authors, setAuthors] = useState<Array<UserType>>([]);
  const { user, isAuth } = use(AuthContext);

  // Get list of users after component is mounted.
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/users`);

      if (!response.ok) {
        return;
      }

      const results = await response.json();

      // Exclude authenticated user if necessary.
      const authors = isAuth
        ? results.filter((author: UserType) => author.id !== user?.id)
        : results;

      setAuthors(authors);
    }

    fetchData();
  }, [user]);

  return (
    <div>
      <label htmlFor="authorId">Author</label>
      <select value={isAuth ? user?.id : ''} onChange={() => console.log('select on change')}>
        {/* Default selected option when not authenticated */}
        <option value="">Select an author</option>
        {/* Default selected option when authenticated */}
        {isAuth && <option value={user?.id}>Me ({user?.username})</option>}
        {/* Other users */}
        {authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.username}
          </option>
        ))}
      </select>
    </div>
  );
}
