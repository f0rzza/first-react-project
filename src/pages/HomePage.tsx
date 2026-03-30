import { Layout } from '../layouts/Layout';
import { CustomAccordionList } from '../components/accordions/CustomAccordionList';
import { demoAccordions } from '../config/demoAccordions';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <Layout>
      <h1>Vite + React - DEMO</h1>

      <h2>List of demos</h2>
      <CustomAccordionList data={demoAccordions} />

      <div>
        <a href="http://localhost:5173/users/1">User1</a>
        <br />
        <Link to="/users/1">See User 1</Link>
        <br />
        <Link to="/users/1">See User 2</Link>
      </div>
    </Layout>
  );
}
