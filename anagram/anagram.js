// @ts-check

/** Find anagrams from a list of candidates
 * @param {string} targetWord The target word
 * @param {string[]} candidates A list of candidates
 * @returns {string[]} Anagrams
 */
export const findAnagrams = (targetWord, candidates) => {
  candidates = candidates.filter((value) => value.toLowerCase() !== targetWord.toLowerCase());

  const normalize = (word) => word.toLowerCase().split('').sort().join('');

  return candidates.filter((value) => normalize(value) === normalize(targetWord));
};
