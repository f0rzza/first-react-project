import './App.css';
import { CustomAccordionList } from './components/accordions/CustomAccordionList';
import { demoAccordions } from './config/demoAccordions';
import { AuthProvider } from './contexts/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <h1>Vite + React - DEMO</h1>
        <CustomAccordionList data={demoAccordions} />
      </AuthProvider>
    </>
  );
}

export default App;
