import { useEffect, useState } from 'react';

export function CategoryFilter() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/categories`);

      if (!response.ok) {
        return;
      }

      const categories = await response.json();
      setCategories(categories);
    }

    fetchData();
  }, []);

  if (categories.length === 0) {
    return;
  }

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <label>
              <input type="checkbox" name="categories" value={category.id} />
              {category.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
