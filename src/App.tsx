import React from 'react';
import './App.css';
import RouterApp from './router/router';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
}

export default App;
