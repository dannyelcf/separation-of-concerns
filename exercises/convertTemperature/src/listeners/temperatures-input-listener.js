import { ON_CHANGE, TEMPERATURES_INPUT } from '../data/constants.js';

export const addTemperaturesChangeListener = (handler) => {
  document
    .getElementById(TEMPERATURES_INPUT)
    ?.addEventListener(ON_CHANGE, handler);
};
