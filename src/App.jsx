import './App.css';
import AlertList from './components/alerts/AlertList';
import { CharacterList } from './components/characters/CharacterList';

function App() {
  return (
    <>
      <h1>Vite + React - DEMO</h1>

      {/* Alerts */}
      <section>
        <h2>List of Alert components</h2>
        <h3>With Hook: useState</h3>
        <AlertList />
      </section>

      {/* Characters */}
      <section>
        <h2>List of SW characters</h2>
        <h3>With API & Hooks: useState, useEffect</h3>
        <CharacterList />
      </section>
    </>
  );
}

export default App;
