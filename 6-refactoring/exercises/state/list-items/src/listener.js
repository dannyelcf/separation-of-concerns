import { LIST_ALL_OF_THEM } from '../data/constants.js';
import { listHandler } from './handler.js';
import { list } from './util.js';

document.getElementById(LIST_ALL_OF_THEM).addEventListener('click', listHandler);