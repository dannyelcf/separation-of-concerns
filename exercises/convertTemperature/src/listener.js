import handlers from './handlers.js';
import {SPACE,TEMPERATURE_INPUT,CONVERT_TEMPERATURE_CONTAINER,MESSAGE_ERROR_NOT_INTEGER,
} from './constants.js';
const listener = () => {
  document
    .getElementById(TEMPERATURE_INPUT)
    .addEventListener('change', handlers);
};
export default listener;