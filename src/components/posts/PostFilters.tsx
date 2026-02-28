import { FormEvent } from 'react';
import { AuthorFilter } from './filters/AuthorFilter';
import { CategoryFilter } from './filters/CategoryFilter';

type Props = { onFilterChange: (filterName: string) => void };

export function PostFilters({ onFilterChange }: Props) {
  // Only one handler for all buttons.
  function handleClick(e: FormEvent) {
    const target = e.target as HTMLInputElement;
    const { name } = target;
    onFilterChange(name);
  }

  return (
    <div>
      <form onChange={handleClick}>
        <AuthorFilter />
        <CategoryFilter />
      </form>
    </div>
  );
}
