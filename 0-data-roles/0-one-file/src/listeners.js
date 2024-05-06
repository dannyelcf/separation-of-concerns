import handlers from './handlers.js'
import { INITIAL_STATE, EVENTS, HTML_CLASSES } from './constants.js';

const listener = () => {
document.getElementById(EVENTS.NEXT_NUMBER_CHANGE).addEventListener('change', handlers);
};

export default listener;

