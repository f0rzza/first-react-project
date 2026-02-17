import { JSX, useEffect, useMemo, useReducer } from 'react';

type State = {
  characters: Array<Object>;
  page: number;
  totalPages: number;
  isLoading: boolean;
  message: string;
};

type Action =
  | { type: 'page'; page: number }
  | { type: 'success'; characters: Array<Object>; totalPages: number }
  | { type: 'error'; message: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'page':
      return { ...state, page: action.page };
    case 'success':
      return {
        ...state,
        characters: action.characters,
        totalPages: action.totalPages,
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
function getFilteredCharacters(state: State, nbPerPage: number = 10) {
  const indexMin = nbPerPage * (state.page - 1);
  const indexMax = indexMin + 9;

  return state.characters.filter((p, i) => {
    if (indexMin <= i && i <= indexMax) return p;
  });
}

// Get pagination : array of buttons.
function getPagination(totalPages: number, dispatch: (action: Action) => void): Array<JSX.Element> {
  const pagination = [];

  for (let index = 1; index <= totalPages; index++) {
    const button = (
      <button key={index} onClick={() => dispatch({ type: 'page', page: index })}>
        {index}
      </button>
    );
    pagination.push(button);
  }

  return pagination;
}

export function CharacterListWithPagination() {
  const [state, dispatch] = useReducer(reducer, {
    characters: [],
    page: 1,
    totalPages: 1,
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

        // Get the number of total pages.
        const totalPages = Math.ceil(result.length / 10);

        dispatch({ type: 'success', characters: result, totalPages: totalPages });
      } catch (error) {
        dispatch({ type: 'error', message: `An error has occurred.-3` });
      }
    }

    fetchData();
  }, []);

  // When characters list or current page changes, is updated or the current page changes,
  const filteredCharacters = useMemo(
    () => getFilteredCharacters(state),
    [state.characters, state.page],
  );

  const { page, totalPages, isLoading, message } = state;

  const pagination = getPagination(totalPages, dispatch);

  return (
    <div>
      <p>
        Liste - {page}/{totalPages}
      </p>

      {isLoading && <p>Loading...</p>}

      <p>{message}</p>

      <p>NB : {filteredCharacters.length}</p>

      {filteredCharacters.length && (
        <ul>
          {filteredCharacters.map((p, index) => (
            <li key={index}>{p.name}</li>
          ))}
        </ul>
      )}

      <div>{pagination}</div>
    </div>
  );
}
