import { listHandler } from './handler.js';
import { bulletPoint } from './constants.js';

const setupEventListener = () => {
document.getElementById('list-them').addEventListener('click', () => {
  const allInputs = getUserInput();
  const stringList = generateList(allInputs, bulletPoint);
  const message = `All items:${stringList}`;
  displayResult(message);
});
}
