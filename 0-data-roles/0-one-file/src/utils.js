import { INITIAL_STATE, EVENTS, HTML_CLASSES } from './constants.js';
const state = {
    currentNumber: 0,
    allNumbers: [],
  };

  
  // --- read the user's input ---
  const inputValue = EVENTS.target.value;
  const nextNumber = Number(inputValue);

  // --- update state ---
  state.allNumbers.push(nextNumber);
  state.currentNumber = state.allNumbers.at(-1);