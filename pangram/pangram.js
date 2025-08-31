// @ts-check

/**
 * Determine if a given sentence is a pangram
 * @param {string} sentence - A sentence
 * @returns {boolean} - Return true if the sentence is a pangram
 */
export const isPangram = (sentence) => {
  // Sanitize the string keeping only pure letters
  // and convert them to lowercase
  const letters = sentence.toLowerCase().replace(/[^a-z]/g, '');

  // Put letters into a set (guarantee uniqueness)
  // and check if all the letters of the alphabet are present (26)
  return new Set(letters).size === 26;
};
