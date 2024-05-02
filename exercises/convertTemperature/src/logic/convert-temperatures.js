/**
 * Convert a temperature in Fahrenheit degrees to Celcius degrees.
 *
 * @param {number} fahrenheit - Temperature in Fahrenheit degrees.
 * @returns {number} - Temperature in Celcius degrees.
 */
export const fahrenheitToCelcius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
