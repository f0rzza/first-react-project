import { useEffect, useRef, useState } from 'react';
import { BasicButton } from '../buttons/BasicButton';

export function Timer({ allowFocus = false }: { allowFocus?: boolean }) {
  // Time in seconds.
  const [time, setTime] = useState(0);

  // Current timer ID if existing.
  const timerIdRef = useRef(0);

  // If the timer is running or not.
  const [isRunning, setIsRunning] = useState(false);

  // Track the last click.
  const lastClick = useRef('');

  // References to timer buttons.
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const stopButtonRef = useRef<HTMLButtonElement>(null);
  const resetButtonRef = useRef<HTMLButtonElement>(null);

  function handleStartClick() {
    // Start the time only one time.
    if (!isRunning) {
      // Initialize and run the timer.
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      // Store the timer ID.
      timerIdRef.current = timerId;

      // Change the timer status.
      setIsRunning(true);

      // Update last click tracking.
      lastClick.current = 'start';
    }
  }

  function handleStopClick() {
    if (isRunning) {
      // Stop the timer.
      clearInterval(timerIdRef.current);

      // Change the timer status.
      setIsRunning(false);

      // Update last click tracking.
      lastClick.current = 'stop';
    }
  }

  function handleResetClick() {
    setTime(0);

    // Update last click tracking.
    lastClick.current = 'reset';
  }

  useEffect(() => {
    if (lastClick.current !== '') {
      // Add the focus on the start or stop button.
      const buttonWithFocus = lastClick.current === 'start' ? stopButtonRef : startButtonRef;
      buttonWithFocus.current?.focus();

      // Reset last click tracking. (to avoid conflicts with several timers)
      lastClick.current = '';
    }
  }, [isRunning, time]); // Dependencies : 'isRunning' is not sufficient after 'Reset' click. (timer is already stopped)

  return (
    <>
      <div>Timer: {time} sec</div>

      <BasicButton
        label="Start"
        ref={startButtonRef}
        onClick={handleStartClick}
        disabled={isRunning}
      />

      <BasicButton
        label="Stop"
        ref={stopButtonRef}
        onClick={handleStopClick}
        disabled={!isRunning}
      />

      <BasicButton
        label="Reset"
        ref={resetButtonRef}
        onClick={handleResetClick}
        disabled={isRunning || (!isRunning && time === 0)}
      />
    </>
  );
}
