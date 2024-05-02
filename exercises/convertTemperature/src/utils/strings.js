/**
 * Returns a new string with all placeholders ({0}, {1}, {n}) replaced.
 * Reference: https://medium.com/@onlinemsr/javascript-string-format-the-best-3-ways-to-do-it-c6a12b4b94ed
 *
 * @param {string} template - The string with placeholders.
 * @param {string[]} args - The replacements.
 * @returns {string} - The string with all placeholders ({0}, {1}, {n}) replaced.
 */
export const replacePlaceholders = (template, ...args) => {
  if (template) {
    return template.replace(/{([0-9]+)}/g, function (match, index) {
      return typeof args[index] === 'undefined' ? match : args[index];
    });
  }
  return template;
};
