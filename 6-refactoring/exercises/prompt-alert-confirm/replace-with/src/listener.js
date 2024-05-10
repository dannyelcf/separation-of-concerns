import { REPLACE_STRING } from '../data/constants.js';
import { replaceWithHandler } from './handler.js';


document.getElementById(REPLACE_STRING).addEventListener('click', replaceWithHandler);