import { JSX, MouseEvent, useMemo } from 'react';
import { PaginationButton } from '../buttons/PaginationButton';

type Props = {
  data: Array<unknown>;
  currentPage: number;
  onPageChange: (page: number) => void;
};

// Get array of buttons.
function getPagination(currentPage: number, totalPages: number) {
  const buttons: Array<JSX.Element> = [];

  for (let index = 1; index <= totalPages; index++) {
    const isCurrent = index === currentPage;
    const button = (
      <PaginationButton key={index} page={index} current={isCurrent} disabled={isCurrent} />
    );
    buttons.push(button);
  }

  return buttons;
}

export function Pagination({ data, currentPage, onPageChange }: Props) {
  const totalPages = Math.ceil(data.length / 10);

  const pagination = useMemo(
    () => getPagination(currentPage, totalPages),
    [currentPage, totalPages],
  );

  // Only one handler for all buttons.
  function handleClick(e: MouseEvent) {
    e.preventDefault();

    // Get page ID from 'data-*' attribute.
    const target = e.target as HTMLLIElement;
    const { pageId } = target.dataset;

    if (pageId) {
      onPageChange(parseInt(pageId));
    }
  }

  return <div onClick={handleClick}>{pagination}</div>;
}
