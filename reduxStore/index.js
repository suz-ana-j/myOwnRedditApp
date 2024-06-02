import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from './subredditSlice';
import App from './App';

const store = configureStore({
  reducer: {
    subreddit: subredditReducer,
    // Add other reducers here
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
