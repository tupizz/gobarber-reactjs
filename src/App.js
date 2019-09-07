import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// Reactotron configuration
import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

// Global style
import GlobalStyle from './styles/global';

// import store
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
