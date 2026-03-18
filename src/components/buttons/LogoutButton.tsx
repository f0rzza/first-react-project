import { use, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export function LogoutButton() {
  // TODO : use MUI button
  const [isEnabled, setIsEnabled] = useState(true);
  const { logout } = use(AuthContext);

  async function handleClick() {
    if (!isEnabled) return;

    setIsEnabled(false);

    try {
      logout();
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      setIsEnabled(true);
    }
  }

  return (
    <button onClick={handleClick} disabled={!isEnabled}>
      Logout
    </button>
  );
}
