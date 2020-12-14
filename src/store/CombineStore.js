import { applyMiddleware, createStore,combineReducers } from 'redux';

import thunk from 'redux-thunk';

import  repos from '../reducers/githupReducer'

const reducers = combineReducers({ repos });

export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState, applyMiddleware(thunk));
    return store;
  }
  const store =configureStore();
  export default store;//const store = configureStore();