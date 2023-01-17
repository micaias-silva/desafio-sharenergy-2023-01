import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';

import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/Global';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
