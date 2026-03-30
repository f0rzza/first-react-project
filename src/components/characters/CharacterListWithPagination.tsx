import { useEffect, useMemo, useReducer } from 'react';
import { Pagination } from '../common/Pagination';
import { CharacterType } from '../../types/common';
import { CharacterCard } from './CharacterCard';

type State = {
  characters: Array<CharacterType>;
  page: number;
  isLoading: boolean;
  message: string;
};

type Action =
  | { type: 'page'; page: number }
  | { type: 'success'; characters: Array<CharacterType> }
  | { type: 'error'; message: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'page':
      return { ...state, page: action.page };

    case 'success':
      return {
        ...state,
        characters: action.characters,
        isLoading: false,
        message: '',
      };

    case 'error':
      return { ...state, isLoading: false, message: action.message };

    default:
      return state;
  }
}

// Get characters of the current page.
function getFilteredCharacters(
  page: number,
  characters: Array<CharacterType>,
  nbPerPage: number = 10,
) {
  const indexMin = nbPerPage * (page - 1);
  const indexMax = indexMin + 9;

  return characters.filter((p, i) => {
    if (indexMin <= i && i <= indexMax) return p;
  });
}

export function CharacterListWithPagination() {
  const [state, dispatch] = useReducer(reducer, {
    characters: [],
    page: 1,
    isLoading: true,
    message: '',
  });

  // When the component is mounted,
  useEffect(() => {
    // get all the characters with API. Note: this API has not 'current page' option.
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_SW_API_URL}/people`);

        if (!response.ok) {
          dispatch({ type: 'error', message: `An error has occurred.-1` });
          return;
        }

        // Keep only some details for test.
        const result = await response.json();

        if (result.length === 0) {
          dispatch({ type: 'error', message: `An error has occurred.-2` });
          return;
        }

        dispatch({ type: 'success', characters: result });
      } catch (error) {
        dispatch({ type: 'error', message: `An error has occurred.-3` });
      }
    }

    fetchData();
  }, []);

  const { characters, page, isLoading, message } = state;

  // When characters list or current page changes, is updated or the current page changes,
  const filteredCharacters = useMemo(
    () => getFilteredCharacters(page, characters),
    [characters, page],
  );

  return (
    <>
      <h1>List of SW characters with pagination</h1>
      <h2>With API & Hooks: useEffect, useMemo, useReducer</h2>

      <div>
        {isLoading && <p>Loading...</p>}

        <p>{message}</p>

        <p>Résultats : {characters.length} personnages</p>

        {filteredCharacters.length && (
          <ul>
            {filteredCharacters.map((p, index) => (
              <CharacterCard key={index} name={p.name} />
            ))}
          </ul>
        )}

        <Pagination
          data={characters}
          currentPage={page}
          onPageChange={(page: number) => dispatch({ type: 'page', page })}
        />
      </div>
    </>
  );
}
