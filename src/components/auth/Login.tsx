import { useEffect, useState } from 'react';
import { LoginButton } from '../buttons/LoginButton';
import { LoginForm } from '../forms/LoginForm';
import { LogoutButton } from '../buttons/LogoutButton';

export function Login() {
  const [isAuth, setIsAuth] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // const [authChecked, setAuthChecked] = useState(false);
  // authChecked : useful to avoid 'flash' effect during auth verification. Example: display login form then hide it after verification.
  // Here it's not necessary because LoginForm is displayed after click on a button.

  // Check user authentication after component is mounted.
  useEffect(() => {
    async function checkAuthentication() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/auth/check`, {
          credentials: 'include',
        });

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        if (data.success) {
          setIsAuth(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

    checkAuthentication();
  }, []);

  return (
    <div>
      {!isAuth && (
        <div>
          <LoginButton onClick={() => setIsClicked(!isClicked)} />
          {isClicked && <LoginForm onSubmit={() => setIsAuth(!isAuth)} />}
        </div>
      )}

      {isAuth && <LogoutButton onClick={() => setIsAuth(false)} />}
    </div>
  );
}
