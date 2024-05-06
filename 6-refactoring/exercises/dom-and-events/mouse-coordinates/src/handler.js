import { formatCoordinates } from './util.js';

export const showMouseCoordinates = (event) => {
        debugger;
        // read & process user input
        const xValue = event.pageX;
        const yValue = event.pageY;
    
        // execute core logic
        const formattedCoordinates = 'X: ' + xValue + '\nY: ' + yValue;
    
        // render result for user
        document.getElementById(MOUSE_POSITION).innerHTML = formattedCoordinates;
    
        // log action for developers
        console.log('\n--- new coordinates ---');
        console.log('x:', xValue);
        console.log('y:', yValue);
      }
;
