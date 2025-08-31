// @ts-check

/**
 * Transcribe a DNA sequence into RNA
 * @param {string} dna - A DNA Sequence
 * @returns {string} - The RNA Sequence
 */
export const toRna = (dna) => {
  const transcriptionTable = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  return dna
    .split('')
    .map((nucleotide) => transcriptionTable[nucleotide])
    .join('');
};
