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
