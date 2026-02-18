import { ReactNode } from 'react';

export type CustomAccordionType = {
  title: string;
  content: () => ReactNode;
};

export type CharacterType = { name: string; gender: string };
