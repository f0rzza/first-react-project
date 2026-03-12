import { ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';

type Props = { children: ReactNode };

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState(undefined);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const login = async (identifier: string, password: string) => {
    setIsLoading(true);

    // Call API request
    const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier: identifier, password: password }),
      credentials: 'include',
    });

    if (!response.ok) {
      setIsLoading(false);
      return false;
    }

    // Read the body of the response
    const data = await response.json();

    if (data.success) {
      setUser(data.user);
      setIsAuth(true);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const logout = async () => {
    setIsLoading(true);

    // Call API request
    const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      setIsLoading(false);
      return;
    }

    // Read the body of the response
    const data = await response.json();

    if (data.success) {
      setUser(undefined);
      setIsAuth(false);
    }

    setIsLoading(false);
  };

  // Check if user is authenticated.
  const checkAuthentication = async () => {
    setIsLoading(true);

    const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/auth/check`, {
      credentials: 'include',
    });

    if (!response.ok) {
      setIsLoading(false);
      return;
    }

    // Read the body of the response
    const data = await response.json();

    if (data.success) {
      setUser(data.user);
      setIsAuth(true);
    }

    setIsLoading(false);
  };

  return (
    <AuthContext value={{ user, isAuth, loading, login, logout, checkAuthentication }}>
      {children}
    </AuthContext>
  );
}
