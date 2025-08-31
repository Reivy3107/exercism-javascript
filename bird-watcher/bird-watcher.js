// @ts-check

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalNumberOfBirds = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalNumberOfBirds += birdsPerDay[i];
  }

  return totalNumberOfBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const NUMBER_OF_DAYS_PER_WEEK = 7;
  let totalNumberOfBirds = 0;
  let startIndex = (week - 1) * NUMBER_OF_DAYS_PER_WEEK;
  let endIndex = startIndex + NUMBER_OF_DAYS_PER_WEEK;

  for (let i = startIndex; i < endIndex; i++) {
    totalNumberOfBirds += birdsPerDay[i];
  }

  return totalNumberOfBirds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i === 0 || i % 2 === 0) {
      birdsPerDay[i] += 1;
    }
  }
}
