import './App.css';
import { CustomAccordionList } from './components/accordions/CustomAccordionList';
import { demoAccordions } from './config/demoAccordions';

function App() {
  return (
    <>
      <h1>Vite + React - DEMO</h1>
      <CustomAccordionList data={demoAccordions} />
    </>
  );
}

export default App;
