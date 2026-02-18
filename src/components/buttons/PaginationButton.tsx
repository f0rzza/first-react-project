type Props = {
  page: number;
  label?: string;
  current?: boolean;
  disabled?: boolean;
};

export function PaginationButton({ page, label, current = false, disabled = false }: Props) {
  // TODO : use MUI button
  return (
    <button data-page-id={page} className={current ? 'current-page' : ''} disabled={disabled}>
      {label ?? page}
    </button>
  );
}
