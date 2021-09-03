import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from 'components/App/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
