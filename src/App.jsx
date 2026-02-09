import './App.css';
import AlertList from './components/alerts/AlertList';

function App() {
  return (
    <>
      <h1>Vite + React - DEMO</h1>

      {/* Alerts */}
      <section>
        <h2>Composant Alert + liste</h2>
        <AlertList />
      </section>
    </>
  );
}

export default App;
