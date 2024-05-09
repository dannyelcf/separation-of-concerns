/**
 *
 */
export const replaceWith = (stringToReplacify, oldChar, newChar) => {
    let newString = '';
    for (const char of stringToReplacify) {
      if (char === oldChar) {
        newString += newChar;
      } else {
        newString += char;
      }
    }
    return newString;
  };
