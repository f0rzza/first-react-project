import { ReactNode } from 'react';

export type CustomAccordionType = {
  title: string;
  content: () => ReactNode;
};

export type CharacterType = { name: string; gender: string };

export type PostType = {
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserType = { username: string; email: string } | undefined;

export type AuthStateType = {
  user: UserType;
  isAuth: boolean;
  loading: boolean;
  login: (identifier: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuthentication: () => Promise<void>;
};
