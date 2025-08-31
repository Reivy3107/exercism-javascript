// @ts-check

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

/**
 * Return the value of the first two colors on a resistance
 * @param {string[]} colors - The colors list
 * @returns {number} - The value of the colors
 */
export const decodedValue = (colors) => {
  return Number(`${COLORS.indexOf(colors[0])}${COLORS.indexOf(colors[1])}`);
};
