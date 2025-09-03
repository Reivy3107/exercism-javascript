// @ts-check

/**
 * Converts a long name to its acronym
 * @param {string} str A long name
 * @returns {string} The acronym
 */
export const parse = (str) => {
  return (str.match(/[A-Za-z']+/g) || []).map((word) => word.replace(/^'+|'+$/g, '')[0].toUpperCase()).join('');
};
