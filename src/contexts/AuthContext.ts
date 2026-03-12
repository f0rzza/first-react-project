import { createContext } from 'react';
import { AuthStateType } from '../types/common';

export const AuthContext = createContext<AuthStateType>({
  user: undefined,
  isAuth: false,
  loading: false,
  login: () => new Promise<boolean>((identifier, password) => false),
  logout: () => new Promise<void>(() => {}),
  checkAuthentication: () => new Promise<void>(() => {}),
});
