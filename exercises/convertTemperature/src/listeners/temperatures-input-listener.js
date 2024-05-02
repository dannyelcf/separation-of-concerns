import { ON_CHANGE, TEMPERATURES_INPUT } from '../data/constants.js';

/**
 * Add an 'change' event listener to the element whose id is 'temperatures'.
 *
 * @param {function} handler - Callback function to be called when the event occurs.
 */
export const addTemperaturesChangeListener = (handler) => {
  document
    .getElementById(TEMPERATURES_INPUT)
    ?.addEventListener(ON_CHANGE, handler);
};
