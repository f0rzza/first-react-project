import { useEffect, useReducer } from 'react';
import { PostFilters } from './PostFilters';
import { Pagination } from '../list/Pagination';
import { PostList } from './PostList';

// TODO : replace 'unknown' type with a 'Post' type.

type Filters = {
  categories: Array<number>;
  authors: Array<number>;
};

type State = {
  data: Array<unknown>;
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  message: string;
  selectedFilters: Filters;
};

type Action =
  | { type: 'page'; page: number }
  | { type: 'filter'; filterName: string }
  | { type: 'success'; data: Array<unknown>; totalPages: number }
  | { type: 'error'; message: string }
  | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'page':
      return { ...state, currentPage: action.page, isLoading: true, message: '' };

    case 'filter':
      // Get checked filters from name.
      const checked = document.querySelectorAll(`input[name=${action.filterName}]:checked`);

      // Convert 'NodeListOf' element to Array.
      const ids = Array.from(checked).map((item) => {
        return (item as HTMLInputElement).value;
      });

      return {
        ...state,
        currentPage: 1,
        isLoading: true,
        message: '',
        selectedFilters: {
          ...state.selectedFilters,
          [action.filterName]: ids, // Update the current filter array.
        },
      };

    case 'success':
      return {
        ...state,
        data: action.data,
        totalPages: action.totalPages,
        isLoading: false,
        message: '',
      };

    case 'error':
      return state;

    case 'reset':
      return {
        data: [],
        currentPage: 1,
        totalPages: 1,
        isLoading: true,
        message: '',
        selectedFilters: { categories: [], authors: [] },
      };

    default:
      return state;
  }
}

export function PostSection() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: true,
    message: '',
    selectedFilters: { categories: [], authors: [] },
  });

  useEffect(() => {
    async function fetchData() {
      // Generate URL parameters.
      const params = new URLSearchParams();
      params.append('page', state.currentPage.toString());

      const { categories, authors } = state.selectedFilters;
      params.append('categories', categories.join(','));
      params.append('authors', authors.join(','));

      // Add params to API URL.
      const response = await fetch(`${import.meta.env.VITE_BASE_BLOG_API_URL}/posts?${params}`);

      if (!response.ok) {
        dispatch({ type: 'error', message: 'Error : pas de réponse API' });
        return;
      }

      const result = await response.json();

      const nbPostsPerPage = import.meta.env.VITE_NB_POSTS_PER_PAGE ?? 10;
      const totalPages = Math.ceil(result.total / nbPostsPerPage);

      dispatch({ type: 'success', data: result.posts, totalPages: totalPages });
    }

    fetchData();
  }, [state.currentPage, state.selectedFilters]);

  const {
    data,
    currentPage,
    totalPages,
    isLoading,
    message,
    selectedFilters: { categories, authors },
  } = state;

  const nbSelectFilters = categories.length + authors.length;

  return (
    <section>
      <div className="filters">
        <PostFilters onFilterChange={(filterName) => dispatch({ type: 'filter', filterName })} />
      </div>
      <div className="list">
        {nbSelectFilters > 0 && <p>Selected filters: ...</p>}

        <p>
          {currentPage} / {totalPages}
        </p>

        {data.length > 0 && (
          <div>
            <PostList data={data} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => dispatch({ type: 'page', page })}
            />
          </div>
        )}

        {isLoading && <p>Loading...</p>}

        {message && <p>{message}</p>}
      </div>
    </section>
  );
}
