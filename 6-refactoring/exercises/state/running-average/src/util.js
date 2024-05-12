/**
 *
 */
// util.js

export const average = (data, newNumber) => {
    // Add the new number to the array
    data.numbers.push(newNumber);
  
    // Calculate the average
    data.average = data.numbers.reduce((sum, num) => sum + num, 0) / data.numbers.length;
  
    // Communicate result to user
    const message = `running average: ${data.average}`;
  };
  
  
