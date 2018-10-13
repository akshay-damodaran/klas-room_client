/* global localStorage */

const storageKey = 'klasroom';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(storageKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (key, state) => {
  let newState = {};
  if (loadState()) {
    newState = loadState();
    newState[key] = {
      ...newState[key],
      ...state,
    };
  } else {
    newState[key] = state;
  }
  try {
    const serializedState = JSON.stringify(newState);
    localStorage.setItem(storageKey, serializedState);
  } catch (error) {
    // write errors
  }
};

export default loadState;
