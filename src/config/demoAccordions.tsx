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
          <h2>Authentication</h2>
          <h3>With API & Hooks: useEffect, useState</h3>
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
          <h2>List of Posts with filters and pagination</h2>
          <h3>With API & Hooks: useEffect, useReducer, useState</h3>
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
          <h2>List of Alert components</h2>
          <h3>With Hook: useState</h3>
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
          <h2>List of SW characters</h2>
          <h3>With API & Hooks: useState, useEffect</h3>
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
          <h2>List of SW characters with pagination</h2>
          <h3>With API & Hooks: useEffect, useMemo, useReducer</h3>
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
          <h2>Random SW character</h2>
          <h3>With API & Hooks: useEffect, useReducer (TypeScript)</h3>
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
          <h2>Timers</h2>
          <h3>With Hooks: useSate, useRef, useEffect (TypeScript)</h3>
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
          <h2>One counter, many buttons</h2>
          <h3>With memo() & Hooks: useCallback, useState</h3>
          <OneButtonManyButtons />
        </>
      );
    },
  },
];
