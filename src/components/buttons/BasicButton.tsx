import { Ref } from 'react';

type Props = {
  label: string;
  ref?: Ref<HTMLButtonElement> | null;
  onClick: () => void;
  disabled?: boolean;
};

export function BasicButton({ label, ref, onClick, disabled = false }: Props) {
  // TODO : use MUI button
  return (
    <button onClick={onClick} ref={ref} disabled={disabled}>
      {label}
    </button>
  );
}
