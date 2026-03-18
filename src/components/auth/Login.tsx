import { use, useEffect, useState } from 'react';
import { LoginButton } from '../buttons/LoginButton';
import { LoginForm } from '../forms/LoginForm';
import { LogoutButton } from '../buttons/LogoutButton';
import { AuthContext } from '../../contexts/AuthContext';

export function Login() {
  const { user, isAuth, checkAuthentication } = use(AuthContext);
  const [isClicked, setIsClicked] = useState(false);
  // const [authChecked, setAuthChecked] = useState(false);
  // authChecked : useful to avoid 'flash' effect during auth verification. Example: display login form then hide it after verification.
  // Here it's not necessary because LoginForm is displayed after click on a button.

  // Check user authentication after component is mounted.
  useEffect(() => {
    if (isAuth) return;

    try {
      checkAuthentication();
    } catch (error) {
      console.log(error);
    }
  }, [isAuth]);

  return (
    <div>
      <p>Hello {user?.username}</p>

      {!isAuth && (
        <div>
          <LoginButton onClick={() => setIsClicked(!isClicked)} />
          {isClicked && <LoginForm />}
        </div>
      )}

      {isAuth && <LogoutButton />}
    </div>
  );
}
