import { Timer } from './Timer';

export function TimerList() {
  return (
    <>
      <h1>Timers</h1>
      <h2>With Hooks: useSate, useRef, useEffect (TypeScript)</h2>

      <Timer />
      <Timer />
    </>
  );
}
