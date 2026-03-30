import { memo, useCallback, useState } from 'react';
import { BasicButton } from '../buttons/BasicButton';

// Memoïse BasicButton component.
const MemoBasicButton = memo(BasicButton);

export function OneButtonManyButtons() {
  const [count, setCount] = useState(0);

  /** Buttons without useCallback Hook **/

  // Note : all this buttons are re-rendered when parent is re-rendered.

  const handleClick = () => setCount(count + 1);

  const buttons = [
    <BasicButton key="1" label="Click on 1" onClick={() => setCount(count + 1)} />,

    <BasicButton
      key="2"
      label="Click on 2"
      onClick={() => setCount((prevCount) => prevCount + 1)}
    />,

    <BasicButton key="3" label="Click on 3" onClick={handleClick} />,
  ];

  /** Buttons with useCallback Hook **/

  // Notes :
  // Use memoised BasicButton component.
  // All this buttons are re-rendered too when parent is re-rendered.
  // Except n°7 : memo() + useCallback() combination.

  // Warning: MemoBasicButton component is re-rendered when there are dependencies.
  const cbHandleClick1 = useCallback(() => setCount(count + 1), [count]); // Re-rendered after count updates.
  const cbHandleClick2 = useCallback(() => setCount((prevCount) => prevCount + 1), []); // Not re-rendered

  const memobButtons = [
    <MemoBasicButton key="4" label="Click on 4" onClick={() => setCount(count + 1)} />,

    <MemoBasicButton
      key="5"
      label="Click on 5"
      onClick={() => setCount((prevCount) => prevCount + 1)}
    />,

    <MemoBasicButton key="6" label="Click on 6" onClick={cbHandleClick1} />,
    <MemoBasicButton key="7" label="Click on 7" onClick={cbHandleClick2} />,
  ];

  console.log('OneCounterManyButtons - rendered');
  return (
    <>
      <h1>One counter, many buttons</h1>
      <h2>With memo() & Hooks: useCallback, useState</h2>

      <div>
        <div>Counter: {count}</div>
        <div>
          <p>With BasicButton component</p>
          {buttons}
        </div>
        <div>
          <p>
            With memoised BasicButton component.
            <br />
            <i>The last two use 'useCallback' Hook.</i>
          </p>
          {memobButtons}
        </div>
      </div>
    </>
  );
}
