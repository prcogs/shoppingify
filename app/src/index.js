import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import itemsReducer from './reducers/itemsReducer'
import filterNavBarReducer from './reducers/filterNavBarReducer'


const store = createStore(
  combineReducers({
    items : itemsReducer,
    filterNavBar : filterNavBarReducer
  })
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
