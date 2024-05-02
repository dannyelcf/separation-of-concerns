import { SPACE_REGEX } from '../data/constants.js';

/**
 * Convert a text containing numbers to an array of numbers.
 * If the input text contains non valid numbers, NaN is used as its substitute.
 *
 * @param {string} text - The text to be parsed.
 * @returns {number[]} - Array of numbers.
 */
export const parseToNumberArray = (text) => {
  if (text) {
    return text
      .trim()
      .split(SPACE_REGEX)
      .map((textNumber) => Number(textNumber));
  }
  return [];
};
