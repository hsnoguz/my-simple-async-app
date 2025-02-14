import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import './index.css';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers/githupReducer'

import  store  from './store/CombineStore';


// Wrap existing app in Provider - Step 2
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);