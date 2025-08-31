// @ts-check

/**
 * Transform legacy score-based letter groups into a one-to-one letter-score mapping.
 *
 * @param {Record<number, string[]>} legacy - The legacy format of the score
 * @returns {Record<string, number>} Returns lowercase letters as keys, scores as values
 */
export function transform(legacy) {
  return Object.entries(legacy).reduce((acc, [score, letters]) => {
    letters.forEach((letter) => {
      acc[letter.toLowerCase()] = Number(score);
    });
    return acc;
  }, {});
}
