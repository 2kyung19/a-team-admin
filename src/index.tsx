import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyles';
import theme from 'styles/theme';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from 'slices/store';
import { fetchRequests } from 'slices/requestsSlice';

store.dispatch(fetchRequests());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
