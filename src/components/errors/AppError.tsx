import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export function AppError() {
  const error = useRouteError();

  // Default error
  let status = 500;
  let message = 'An expected error has occured';

  // Check if the error has occured in route loader, action, etc.
  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = error.statusText || error.data;
  } else if (error instanceof Error) {
    // Else,
    message = error.message;
  }

  return (
    <>
      <h1>{status}</h1>
      <p>{message}</p>
    </>
  );
}
