
import thunk from 'redux-thunk';


// actions.js
export const addRepos = repos => ({
  type: 'ADD_REPOS',
  repos,
});

export const clearRepos = () => ({ type: 'CLEAR_REPOS' });

export const getRepos = username => async dispatch => {
  try {
    console.log("test=" + username);
    const url = `https://api.github.com/users/${username}/repos?sort=updated`;
      const response = await fetch(url)
      const responseBody = await response.json();
      dispatch(addRepos(responseBody));
    } catch (error) {
      console.error(error);
      dispatch(clearRepos());
  }
}