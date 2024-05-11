import { state } from '../data/state.js';

export const saveNoCopies = (arr, newItem) => {
  const alreadySaved = arr.includes(newItem); // Check if newItem is already in arr
  if (alreadySaved) {
    return [...arr]; // Item already exists, return a new copy of the input array
  }
  // Create a new array with the newItem added
  return [...arr, newItem];
};
