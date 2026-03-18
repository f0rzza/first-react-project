import { Layout } from '../layouts/Layout';
import { CustomAccordionList } from '../components/accordions/CustomAccordionList';
import { demoAccordions } from '../config/demoAccordions';

export function HomePage() {
  return (
    <Layout>
      <h1>Vite + React - DEMO</h1>
      <CustomAccordionList data={demoAccordions} />
    </Layout>
  );
}
