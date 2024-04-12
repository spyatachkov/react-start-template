import React from 'react';
import { Header } from '../Header/Header';
import s from './Layout.module.scss';

/**
 * Компонент Layout. Это презентационный компонент, будет использован в навигации и содержит компонент Header
 */
export const Layout: React.FC = () => {
  return (
    <>
      <Header className={s.header} />
    </>
  );
};
