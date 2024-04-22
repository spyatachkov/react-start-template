import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './theming';
import { Layout } from './homeworks/hw2_components/Layout/Layout';
import { LocalizationInitiator } from './localization/LocalizationInitiator';

function App() {
  return (
    <BrowserRouter>
      <LocalizationInitiator />
      <ThemeProvider>
        <Layout></Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
