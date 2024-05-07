/**
 *
 */
import { state } from '../data/state.js';

export const listItems = (allInputs) => {
  let stringList = '';
  for (const input of allInputs) {
    stringList += `\n${state.bulletPoint} ${input}`;
  }
  return stringList;
};
