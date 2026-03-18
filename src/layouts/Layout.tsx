import { ReactNode } from 'react';
import { Header } from '../components/common/Header';
import { Content } from '../components/common/Content';
import { Footer } from '../components/common/Footer';
import './Layout.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
