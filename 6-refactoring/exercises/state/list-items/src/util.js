/**
 *
 */
export function generateList(allInputs, bulletPoint) {
    let stringList = '';
    for (const input of allInputs) {
      stringList += `\n${bulletPoint} ${input}`;
    }
    return stringList;
  }
  
  export function displayResult(message) {
    alert(message);
  }
  
  export function getUserInput() {
    const allInputs = [];
    let acceptingInput = true;
    while (acceptingInput) {
      const nextInput = prompt('Enter a list item');
      if (nextInput !== null) {
        allInputs.push(nextInput);
      } else {
        acceptingInput = false;
      }
    }
    return allInputs;
  }
  
