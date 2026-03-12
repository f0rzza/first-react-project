import { ReactNode } from 'react';

export type CustomAccordionType = {
  title: string;
  content: () => ReactNode;
};

export type CharacterType = { name: string; gender: string };

export type PostType = {
  title: string;
  content: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
};

export type UserType = { username: string; email: string } | undefined;

export type AuthStateType = {
  user: UserType;
  isAuth: boolean;
  login: () => void;
  logout: () => void;
  checkAuthentication: () => void;
};
