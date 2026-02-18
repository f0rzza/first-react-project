import { useEffect, useReducer } from 'react';

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
    case 'update': // Display the new character.
      return {
        character: action.newCharacter,
        calls: state.calls + 1,
        isLoading: false,
        errorMessage: '',
      };

    case 'reset': // Reset all state data.
      return { character: null, calls: 0, isLoading: false, errorMessage: '' };

    case 'error': // Display error.
      return { ...state, errorMessage: action.message, isLoading: false };

    case 'loading': // Enable loading.
      return { ...state, isLoading: true };

    default:
      return state;
  }
}

// Type guard function. Note: use a mapping function instead type guard ?
// If we need to rename API field names. Example: 'skin_color' from API will become 'skinColor' in Character type.
function isCharacter(character: unknown): character is Character {
  return typeof character === 'object' && character !== null && character.hasOwnProperty('name');
}

export function RandomCharacter() {
  // Initialize the states
  const [state, dispatch] = useReducer(reducer, {
    character: null,
    calls: 0,
    isLoading: false,
    errorMessage: '',
  });

  // Get a random character from SW API.
  async function getRandomCharacter() {
    try {
      const randomCharacterId = Math.floor(Math.random() * 80) + 1; // Quickfix for the demo
      const response = await fetch(
        `${import.meta.env.VITE_BASE_SW_API_URL}/people/${randomCharacterId}`,
      );

      if (!response.ok) {
        dispatch({ type: 'error', message: 'Character Not Found' });
        return;
      }

      const result = await response.json();

      if (!isCharacter(result)) {
        dispatch({ type: 'error', message: 'Character Not Found' });
        return;
      }

      dispatch({ type: 'update', newCharacter: result });
    } catch (error) {
      dispatch({ type: 'error', message: 'Error has occured' });
    }
  }

  // Get a random character after click on the button.
  async function handleClick() {
    await getRandomCharacter();
  }

  // Get a random character when component is mounted.
  useEffect(() => {
    async function fetchData() {
      await getRandomCharacter();
    }
    fetchData();
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
