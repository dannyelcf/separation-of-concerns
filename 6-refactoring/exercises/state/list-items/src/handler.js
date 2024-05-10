import { generateList, displayResult, getUserInput } from './utils.js'; // Import utility functions
import { bulletPoint } from './constants.js'; // Import constant bulletPoint

/*export function handleListButtonClick() {
  // read & process user input
  const allInputs = getUserInput();

  // execute core logic
  const stringList = generateList(allInputs, bulletPoint);

  // communicate result to user
  const message = `all items:${stringList}`;
  displayResult(message);
}*/
const stringList = list(allInputs);

// Add event listener
document.getElementById('list-them').addEventListener('click', handleListButtonClick);
