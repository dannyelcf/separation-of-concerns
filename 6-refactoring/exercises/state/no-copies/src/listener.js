import saveNoCopiesHandler from './handler.js';


const callEventListener = () => {
    // document
    //   .getElementById(TEMPERATURE_INPUT)
    //   .addEventListener('change', handlers);
    document.getElementById('no-copies-button').addEventListener('click', saveNoCopiesHandler);

  };
  
  export default callEventListener;