// @ts-check

/**
 * Convert a number into its corresponding raindrop sound
 * Divisible by 3 = Pling
 * Divisible by 5 = Plang
 * Divisible by 7 = Plong
 * Not divisible by 3, 5, or 7 return the number as a string
 * @param {number} number A number
 * @returns {string} - The corresponding raindrop song or a number
 */
export const convert = (number) => {
  /**
   * @type {Array<[number, string]>}
   */
  const sounds = [
    [3, 'Pling'],
    [5, 'Plang'],
    [7, 'Plong'],
  ];

  const result = sounds.reduce((acc, [divisor, sound]) => {
    return number % divisor === 0 ? acc + sound : acc;
  }, '');

  return result || number.toString();
};
