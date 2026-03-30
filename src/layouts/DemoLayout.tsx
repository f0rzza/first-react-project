import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import './Layout.css';
import { Outlet } from 'react-router-dom';

export function DemoLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
