import React from 'react';
import './layout.css';
import { Header } from '../Header/Header';

/**
 * Компонент Layout. Это презентационный компонент, будет использован в навигации и содержит компонент Header
 */
export const Layout: React.FC = () => {
  return (
    <>
      <Header />
    </>
  );
};
