// @ts-check

/**
 * Determine if a given year is a leap year
 * @param {number} year A given year
 * @returns {boolean} Return true if the given year is a leap year
 */
export const isLeap = (year) => {
  // If not divisible by 4
  if (year % 4 !== 0) {
    return false;
  }

  // If divisible by 100 but not by 400
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }

  return true;
};
