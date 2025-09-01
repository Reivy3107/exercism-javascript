// @ts-check

/**
 * Determines the hamming distance between two DNA strands of equal size
 * @param {string} strandA - First DNA strand
 * @param {string} strandB - Second DNA strand
 * @returns {number} - The hamming distance
 * @throws {Error} If the strands are not of equal lengths
 */
export const compute = (strandA, strandB) => {
  if (strandA.length !== strandB.length) {
    throw new Error('strands must be of equal length');
  }

  return [...strandA].reduce((distance, char, i) => distance + (char !== strandB[i] ? 1 : 0), 0);
};
