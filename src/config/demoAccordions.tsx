import AlertList from '../components/alerts/AlertList';
import { CharacterList } from '../components/characters/CharacterList';
import { RandomCharacter } from '../components/characters/RandomCharacter';
import { Timer } from '../components/timers/Timer';
import { CustomAccordionType } from '../types/common';

export const demoAccordions: Array<CustomAccordionType> = [
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
];
