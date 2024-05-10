/**
 *
 */
export const reverseAndUpper = (input) => {
  const upperCased = input.toUpperCase();
  const splitted = upperCased.split('');
  const reversed = splitted.reverse();
  const reversedUppercase = reversed.join('');
  return reversedUppercase;
};
