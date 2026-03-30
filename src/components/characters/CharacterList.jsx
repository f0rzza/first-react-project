import { useState, useEffect } from 'react';
import { CharacterCard } from './CharacterCard';

export function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Update the counter after click on the button.
  function handleClick() {
    if (isLoading) return; // Second security
    setCount(count + 1);
  }

  // After each counter update,
  useEffect(() => {
    if (count === 0) {
      return;
    }

    // Asynchronous function to get SW character details with an API.
    async function fetchData() {
      try {
        // Enable the loading mode.
        setIsLoading(true);

        const response = await fetch(`${import.meta.env.VITE_BASE_SW_API_URL}/people/${count}`);

        if (!response.ok) {
          setErrorMessage(`An error has occurred.`);
          return;
        }

        // Keep only some details for test.
        const result = await response.json();
        const { name, gender } = result;

        // eslint warning : when we use directly 'characters' const.
        // const newCharacters = [...characters, { name, gender }];
        // setCharacters(newCharacters);

        // Cleaner and allows to avoid eslint warning in the dependencies.
        // Note : use 'count' as ID because there are not character ID in the API.
        setCharacters((prevCharacters) => [...prevCharacters, { id: count, name, gender }]);
        setErrorMessage(``);
      } catch (error) {
        console.log(error);
        setErrorMessage(`An error has occurred.`);
      } finally {
        // Disable the loading mode. (success or not)
        setIsLoading(false);
      }
    }

    fetchData();
  }, [count]);

  return (
    <>
      <h1>List of SW characters</h1>
      <h2>With API & Hooks: useState, useEffect</h2>

      <button onClick={handleClick} disabled={isLoading}>
        Get a SW character
      </button>

      {/* Display error message if necessary */}
      {errorMessage && <p>{errorMessage}</p>}

      {/* Display list of characters */}
      {characters.length ? (
        <ul>
          {characters.map((c) => (
            <CharacterCard key={c.id} name={c.name} />
          ))}
        </ul>
      ) : (
        <p>No characters</p>
      )}

      {/* Display the counter */}
      <p>Number of characters: {count}</p>
    </>
  );
}
