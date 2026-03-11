import { useState } from 'react';

type Props = {
  onClick: () => void;
};

export function LogoutButton({ onClick }: Props) {
  // TODO : use MUI button
  const [isEnabled, setIsEnabled] = useState(true);

  async function handleClick() {
    if (!isEnabled) return;

    setIsEnabled(false);

    try {
      // Call API request
      const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        return;
      }

      // Read the body of the response
      const data = await response.json();

      if (data.success) {
        onClick();
      }
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      setIsEnabled(true);
    }
  }

  return (
    <button onClick={handleClick} disabled={!isEnabled}>
      Logout
    </button>
  );
}
