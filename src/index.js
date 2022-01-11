import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './styles.css';
import './tailwind.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './store/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
