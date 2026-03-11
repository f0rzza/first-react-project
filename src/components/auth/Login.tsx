import { useState } from 'react';
import { LoginButton } from '../buttons/LoginButton';
import { LoginForm } from '../forms/LoginForm';
import { LogoutButton } from '../buttons/LogoutButton';

export function Login() {
  const [isAuth, setIsAuth] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
