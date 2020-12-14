import { combineReducers } from 'redux';
import {addRepos,clearRepos,getRepos} from '../actions/githupActions'

export const repos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REPOS':
      return action.repos;
    case 'CLEAR_REPOS':
      return [];
    default:
      return state;
  }
};


export default repos;