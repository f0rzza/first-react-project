import { createContext } from 'react';
import { AuthStateType } from '../types/common';

export const AuthContext = createContext<AuthStateType>({
  user: undefined,
  isAuth: false,
  loading: false,
  login: (identifier: string, password: string) => {},
  logout: () => {},
  checkAuthentication: () => {},
});
