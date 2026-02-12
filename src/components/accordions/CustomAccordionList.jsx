import AlertList from '../alerts/AlertList';
import { CustomAccordion } from './CustomAccordion';
import { CharacterList } from '../characters/CharacterList';
import { RandomCharacter } from '../characters/RandomCharacter';

export function CustomAccordionList() {
  return (
    <div>
      {/* Alerts */}
      <CustomAccordion
        id={1}
        title="List of Alert components - With Hook: useState"
        defaultExpanded
      >
        <h2>List of Alert components</h2>
        <h3>With Hook: useState</h3>
        <AlertList />
      </CustomAccordion>

      {/* Characters */}
      <CustomAccordion id={2} title="List of SW characters - With API & Hooks: useState, useEffect">
        <h2>List of SW characters</h2>
        <h3>With API & Hooks: useState, useEffect</h3>
        <CharacterList />
      </CustomAccordion>

      {/* Random Character */}
      <CustomAccordion
        id={3}
        title="Random SW character -With API & Hooks: useEffect, useReducer (TypeScript)"
      >
        <h2>Random SW character</h2>
        <h3>With API & Hooks: useEffect, useReducer (TypeScript)</h3>
        <RandomCharacter />
      </CustomAccordion>
    </div>
  );
}
