import { useEffect, useState } from 'react';

export function AuthorFilter() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/users`);

      if (!response.ok) {
        return;
      }

      const authors = await response.json();
      setAuthors(authors);
    }

    fetchData();
  }, []);

  // Hide filters if there is no data.
  if (authors.length === 0) {
    return;
  }

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <label>
              <input type="checkbox" name="authors" value={author.id} />
              {author.username}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
