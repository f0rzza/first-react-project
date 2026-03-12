type Props = {
  onClick: () => void;
};

export function LoginButton({ onClick }: Props) {
  // TODO : use MUI button
  return <button onClick={onClick}>Login</button>;
}
