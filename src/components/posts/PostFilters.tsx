import { AuthorFilter } from './filters/AuthorFilter';
import { CategoryFilter } from './filters/CategoryFilter';

export function PostFilters() {
  return (
    <div>
      <AuthorFilter />
      <CategoryFilter />
    </div>
  );
}
