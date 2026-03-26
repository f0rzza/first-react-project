import { CategoryType, UserType } from '../types/common';

// Get category from ID.
export async function fetchCategory(id: string): Promise<CategoryType | null> {
  const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/categories/${id}`);

  if (!response.ok) {
    throw new Response('Not Found', { status: 404 });
  }

  const result = await response.json();
  return result;
}

export async function fetchUser(id: string): Promise<UserType> {
  const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/users/${id}`);

  if (!response.ok) {
    throw new Response('Not Found', { status: 404 });
  }

  const result = await response.json();
  return result;
}
