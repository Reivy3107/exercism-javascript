// @ts-check

/**
 *
 * @param {string} string
 * @returns {string}
 */
export const reverseString = (string) => {
  const graphemes = string.match(/(\P{M}\p{M}*)/gu);

  return graphemes ? graphemes.reverse().join('') : '';
};
