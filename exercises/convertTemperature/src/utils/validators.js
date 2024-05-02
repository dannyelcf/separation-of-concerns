import { NUMBERS_SPACES_REGEX } from '../data/constants.js';

/**
 * Check if the input text contains only number characters or spaces.
 *
 * @param {string} text - The text to be checked.
 * @returns {boolean} - It returns true if the text match with /^[0-9\s]*$/ or false otherwise.
 */
export const containsOnlyNumbersAndSpaces = (text) => {
  return NUMBERS_SPACES_REGEX.test(text);
};
