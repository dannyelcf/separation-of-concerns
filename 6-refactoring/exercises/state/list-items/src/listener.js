import { listHandler } from './handler.js';
import { generateList, displayResult, getUserInput } from './utils.js';
import { bulletPoint } from './constants.js';

document.getElementById('list-them').addEventListener('click', () => {
  const allInputs = getUserInput();
  const stringList = generateList(allInputs, bulletPoint);
  const message = `All items:${stringList}`;
  displayResult(message);
});
