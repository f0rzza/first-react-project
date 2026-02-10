import { useEffect, useReducer } from 'react';
import { Character } from './Character';

/** TYPES **/
// TODO : déplacer les déclarations de types dans un dossier spécifique. Ex : /src/types/character.ts (Character, ApiCharacter), etc

type Character = { name: string; gender: string };

type State = {
  character: Character | null;
  calls: number;
  isLoading: boolean;
  errorMessage: string;
};

type Action =
  | { type: 'update'; newCharacter: Character }
  | { type: 'reset' }
  | { type: 'error'; message: string }
  | { type: 'loading' };

// Reducer function for the Hook
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'update':
      return state; // TODO

    case 'reset':
      return state; // TODO

    case 'error':
      return state; // TODO

    case 'loading':
      return state; // TODO

    default:
      return state;
  }
}

export function RandomCharacter() {
  // Initialize the states
  const [state, dispatch] = useReducer(reducer, {
    character: null,
    calls: 0,
    isLoading: false,
    errorMessage: '',
  });

  // Get a random character after click on the button.
  function handleClick() {
    // TODO
  }

  // Get a random character when component is mounted.
  useEffect(() => {
    // TODO
  }, []);

  const { character, calls, isLoading, errorMessage } = state;

  return (
    <>
      <button onClick={handleClick} disabled={isLoading}>
        Get a random SW character
      </button>

      {/* Display error message if necessary */}
      {errorMessage && <p>{errorMessage}</p>}

      {/* Display the random character */}
      <p>Random character :</p>
      {character ? <p>{character.name}</p> : <p>No character</p>}

      {/* Display the counter */}
      <p>Number of API calls: {calls}</p>
    </>
  );
}
