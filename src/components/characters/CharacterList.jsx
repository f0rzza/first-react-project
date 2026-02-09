import { useState, useEffect } from 'react';
import { Character } from './Character';

export function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  // Update the counter after click on the button.
  function handleClick() {
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
        const response = await fetch(`https://swapi.info/api/people/${count}`);

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
      } catch (error) {
        console.log(error);
        setErrorMessage(`An error has occurred.`);
      }
    }

    fetchData();
  }, [count]);

  return (
    <>
      <button onClick={handleClick}>Get a SW character</button>

      {/* Display error message if necessary */}
      {errorMessage && <p>{errorMessage}</p>}

      {/* Display list of characters */}
      <p>List of characters :</p>
      {characters.length ? (
        <ul>
          {characters.map((c) => (
            <Character key={c.id} name={c.name} />
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
