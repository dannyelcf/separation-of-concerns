import { INITIAL_STATE, EVENTS, HTML_CLASSES } from './constants.js';
const handlers = (EVENTS) => {
    const backwardsContainer = document.getElementById(EVENTS.MOUSE_OVER_HISTORY);

   /*const eventsNextNumberChange = document.getElementById(EVENTS.NEXT_NUMBER_CHANGE,);
      // Handler logic for when the user changes the 'next-number' input

const eventsMouseOverHistory = document.getElementById(EVENTS.MOUSE_OVER_HISTORY,);
    // Handler logic for when the user moves the mouse over 'number-history'
*/
    const targetText = EVENTS.target.innerText;

    backwardsContainer.innerHTML = liString + backwardsContainer.innerHTML;

  if (EVENTS.target.nodeName !== 'LI') {
    return;
  };

  const liString = `<li class="number-item">${state.currentNumber}</li>`;s
};