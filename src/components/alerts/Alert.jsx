// We use directly destructuration in the parameters
export default function Alert({ heading, children, type = 'Information' }) {
  return (
    <div className="alert">
      <div>
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <span>{heading}</span>
      </div>

      <button aria-label="Close">
        <span role="img" aria-label="Close">
          ❌
        </span>
      </button>

      <div>{children}</div>
    </div>
  );
}
