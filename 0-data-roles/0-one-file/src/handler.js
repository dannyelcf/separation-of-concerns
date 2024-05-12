import { INITIAL_STATE, EVENTS, HTML_CLASSES } from './constant.js';
const handlers = (event) => {
    const backwardsContainer = document.getElementById(EVENTS.MOUSE_OVER_HISTORY);
   /*const eventsNextNumberChange = document.getElementById(EVENTS.NEXT_NUMBER_CHANGE,);
      // Handler logic for when the user changes the 'next-number' input
const eventsMouseOverHistory = document.getElementById(EVENTS.MOUSE_OVER_HISTORY,);
    // Handler logic for when the user moves the mouse over 'number-history'
*/
const nextNumber = Number(inputValue);

  // --- update state ---
  state.allNumbers.push(nextNumber);
  state.currentNumber = state.allNumbers.at(-1);

    const targetText = event.target.innerText;
    backwardsContainer.innerHTML = liString + backwardsContainer.innerHTML;
  if (event.target.nodeName !== 'LI') {
    return;
  };
  const liString = `<li class="number-item">${state.currentNumber}</li>`;
};






