import { ReactNode } from 'react';
import { AuthContext } from './AuthContext';

type Props = { children: ReactNode };

export function AuthProvider({ children }: Props) {
  const user = undefined;
  const isAuth = false;
  const login = () => console.log('login');
  const logout = () => console.log('logout');
  const checkAuthentication = () => console.log('check auth');

  return (
    <AuthContext value={{ user, isAuth, login, logout, checkAuthentication }}>
      {children}
    </AuthContext>
  );
}
