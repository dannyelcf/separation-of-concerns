import { average } from './util.js';
import { state } from '../data/state.js';

export const runningAverageHandler = () => {
    () => {
        // read & process user input
        const userInput = prompt('add a number to the running average');
        if (userInput === null) {
          alert('good bye');
          return;
        }
      
        const newNumber = Number(userInput);
        if (Number.isNaN(newNumber) || userInput === '') {
          alert(`"${userInput}" is not a valid number`);
          return;
        }
      
        // execute core logic
        /*data.numbers.push(newNumber);
        data.average =
          data.numbers.reduce((sum, next) => sum + next, 0) / data.numbers.length;
      
        // communicate result to user */
        const message = average(newNumber);
        alert(message);
      
        // log interaction
        console.log(data);
      };
      
};
export default runningAverageHandler;
