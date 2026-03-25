import { ReactNode } from 'react';

export type CustomAccordionType = {
  title: string;
  content: () => ReactNode;
};

export type CharacterType = { name: string; gender: string };

export type PostType = {
  title: string;
  content: string;
  published: boolean;
  authorId: number | '';
  createdAt?: Date;
  updatedAt?: Date;
};

export type CategoryType = {
  id?: number;
  name: string;
};

export type UserType = { id?: number; username: string; email: string };

export type AuthStateType = {
  user: UserType | undefined;
  isAuth: boolean;
  loading: boolean;
  login: (identifier: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuthentication: () => Promise<void>;
};
