import { useState } from 'react';

// We use directly destructuration in the parameters
export default function Alert({ heading, children, type = 'Information', closable }) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return;
  }

  function handleCloseClick() {
    setVisible(false);
  }

  return (
    <div className="alert">
      <div>
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <span>{heading}</span>
      </div>

      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}

      <div>{children}</div>
    </div>
  );
}
