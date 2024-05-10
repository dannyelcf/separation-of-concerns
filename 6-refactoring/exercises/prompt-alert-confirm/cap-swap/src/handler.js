import { capSwap } from './utils.js';

export const capSwapHandler = () => {};
() => {
    // read & process user input
    let userInput = null;
    while (userInput === null) {
      userInput = prompt('enter a string to cap-swap');
    }
  
    // execute core logic
    
    const capSwapped = capSwap(userInput);
  
    // communicate result to user
    alert(capSwapped);
  };