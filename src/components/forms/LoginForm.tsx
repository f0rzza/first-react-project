import { ChangeEvent, MouseEvent, useState } from 'react';

type Props = { onSubmit?: () => void };

export function LoginForm({ onSubmit }: Props) {
  const [user, setUser] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(event: MouseEvent) {
    event.preventDefault();

    setIsLoading(true);

    try {
      // Call API request
      const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: user.identifier, password: user.password }),
        credentials: 'include',
      });

      // Read the body of the response
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || `Une erreur s'est produite.`);
        setIsLoading(false);
        return;
      }

      setError('OK');
      setIsLoading(false);

      if (onSubmit) onSubmit();
    } catch (error) {
      console.log('ERROR', error);
      setError(`Une erreur s'est produite. (2)`);
      setIsLoading(false);
    }
  }

  return (
    <form>
      <input
        type="text"
        name="identifier"
        placeholder="Email or username"
        value={user.identifier}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />

      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Connecting...' : 'Log in'}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}
