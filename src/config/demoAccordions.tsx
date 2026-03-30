import AlertList from '../components/alerts/AlertList';
import { Login } from '../components/auth/Login';
import { CharacterList } from '../components/characters/CharacterList';
import { CharacterListWithPagination } from '../components/characters/CharacterListWithPagination';
import { RandomCharacter } from '../components/characters/RandomCharacter';
import { OneButtonManyButtons } from '../components/counter/OneCounterManyButtons';
import { PostSection } from '../components/posts/PostSection';
import { Timer } from '../components/timers/Timer';
import { CustomAccordionType } from '../types/common';

export const demoAccordions: Array<CustomAccordionType> = [
  {
    title: 'Authentication - With API & Hooks: useEffect, useState',
    content: () => {
      return (
        <>
          <Login />
        </>
      );
    },
  },
  {
    title:
      'List of Posts with filters and pagination - With API & Hooks: useEffect, useReducer, useState',
    content: () => {
      return (
        <>
          <PostSection />
        </>
      );
    },
  },
  {
    title: 'List of Alert components - With Hook: useState',
    content: () => {
      return (
        <>
          <AlertList />
        </>
      );
    },
  },
  {
    title: 'List of SW characters - With API & Hooks: useState, useEffect',
    content: () => {
      return (
        <>
          <CharacterList />
        </>
      );
    },
  },
  {
    title:
      'List of SW characters with pagination - With API & Hooks: useEffect, useMemo, useReducer',
    content: () => {
      return (
        <>
          <CharacterListWithPagination />
        </>
      );
    },
  },
  {
    title: 'Random SW character - With API & Hooks: useEffect, useReducer (TypeScript)',
    content: () => {
      return (
        <>
          <RandomCharacter />
        </>
      );
    },
  },
  {
    title: 'Timers - With Hooks: useSate, useRef, useEffect (TypeScript)',
    content: () => {
      return (
        <>
          <Timer />
          <Timer />
        </>
      );
    },
  },
  {
    title: 'One counter, many buttons - With memo() & Hooks: useCallback, useState',
    content: () => {
      return (
        <>
          <OneButtonManyButtons />
        </>
      );
    },
  },
];
