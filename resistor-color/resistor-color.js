// @ts-check

/**
 * Return the value of the color on a resistance
 * @param {string} color - The color
 * @returns {number} - The value of the color
 */
export const colorCode = (color) => COLORS.indexOf(color);

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
