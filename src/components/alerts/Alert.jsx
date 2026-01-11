import { useState } from 'react';

// We use directly destructuration in the parameters
export default function Alert({ heading, children, type = 'Information', closable, onClose }) {
  const [visible, setVisible] = useState(true);

  // Best way to hide component : nothing will be rendered if component is not visible.
  // So, component is absent in the DOM tree.
  if (!visible) {
    return;
  }

  function handleCloseClick() {
    setVisible(false);
    // Raise the 'onClose' custom event when it is defined in the props.
    // Warning : to avoid JS error, the following condtion can be upgraded to check if 'onClose' value is a function.
    if (onClose && onClose instanceof Function) {
      onClose();
    }
  }

  return (
    <div className="alert">
      <div>
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <span>{heading}</span>
      </div>

      {/* If Alert is closable or not */}
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
