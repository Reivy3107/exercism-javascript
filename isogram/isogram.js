// @ts-check

/**
 * Determines if a word is an isogram
 * @param {string} word A word
 * @returns {boolean} Returns true if the word is an isogram
 */
export const isIsogram = (word) => {
  // Sanitize the word
  const cleanedWord = word.toLowerCase().replace(/[\s-]/g, '');

  return new Set(cleanedWord).size === cleanedWord.length;
};
