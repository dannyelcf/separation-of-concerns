import { saveNoCopiesHandler } from './handler.js';

const listener = () => {
    document.getElementById('no-copies-button').
    addEventListener('click',saveNoCopiesHandler);
  };
  export default listener;