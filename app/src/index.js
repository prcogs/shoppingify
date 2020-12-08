import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import itemsReducer from './reducers/itemsReducer'
import filterNavBarReducer from './reducers/filterNavBarReducer'
import filterItemsReduceur  from './reducers/filterItemsReduceur';


const store = createStore(
  combineReducers({
    items : itemsReducer,
    filterItems : filterItemsReduceur,
    filterNavBar : filterNavBarReducer
  }), composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  )
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
