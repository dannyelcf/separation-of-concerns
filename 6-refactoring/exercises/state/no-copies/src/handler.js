import { saveNoCopies } from './util.js';
import { state } from '../data/state.js';

export const saveNoCopiesHandler = () => {

     
    // communicate result to user
    const message = saveNoCopies();
    alert(message);
  
    // log interaction
    console.log(data);
  };
  export default saveNoCopiesHandler;