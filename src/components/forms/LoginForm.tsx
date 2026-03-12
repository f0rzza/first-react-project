import { ChangeEvent, MouseEvent, use, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export function LoginForm() {
  const [user, setUser] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');
  const { loading, login } = use(AuthContext);

  function handleChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(event: MouseEvent) {
    event.preventDefault();

    try {
      const success = await login(user.identifier, user.password);

      if (!success) {
        setError(`Invalid credentials.`);
      } else {
        setError(``);
      }
    } catch (error) {
      console.log('ERROR', error);
      setError(`An error has occured.`);
    }
  }

  return (
    <form>
      <input
        type="text"
        name="identifier"
        placeholder="Email or username"
        value={user.identifier}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Connecting...' : 'Log in'}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}
