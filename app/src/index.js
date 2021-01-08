import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import activeListReducer from './reducers/activeListReducer';
import filterNavBarReducer from './reducers/filterNavBarReducer'
import filterItemsReduceur  from './reducers/filterItemsReduceur';
import historyListReducer from './reducers/historyListReducer';
import infoItemReducer from './reducers/infoItemReducer';
import itemsReducer from './reducers/itemsReducer';
import addItemFormReducer from './reducers/addItemFormReducer';
import authReducer from './reducers/authReducer';


const store = createStore(
  combineReducers({
    activeList : activeListReducer,
    addItemForm : addItemFormReducer,
    auth : authReducer,
    filterItems : filterItemsReduceur,
    filterNavBar : filterNavBarReducer,
    historyList : historyListReducer,
    infoItem : infoItemReducer,
    items : itemsReducer
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
