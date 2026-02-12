import AlertList from '../components/alerts/AlertList';
import { CharacterList } from '../components/characters/CharacterList';
import { RandomCharacter } from '../components/characters/RandomCharacter';
import { CustomAccordionType } from '../types/common';

export const demoAccordions: Array<CustomAccordionType> = [
  {
    title: 'List of Alert components - With Hook: useState',
    h2: 'List of Alert components',
    h3: 'With Hook: useState',
    component: AlertList,
  },
  {
    title: 'List of SW characters - With API & Hooks: useState, useEffect',
    h2: 'List of SW characters',
    h3: 'With API & Hooks: useState, useEffect',
    component: CharacterList,
  },
  {
    title: 'Random SW character - With API & Hooks: useEffect, useReducer (TypeScript)',
    h2: 'Random SW character',
    h3: 'With API & Hooks: useEffect, useReducer (TypeScript)',
    component: RandomCharacter,
  },
];
