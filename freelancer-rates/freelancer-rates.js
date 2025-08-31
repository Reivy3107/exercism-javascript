// @ts-check

/**
 * The number of hours the freelancer work per day
 * @type {number}
 */
const NUMBER_OF_WORK_HOURS_PER_DAY = 8;

/**
 * The number of billable days per month of the freelancer
 * @type {number}
 */
const NUMBER_OF_BILLABLE_DAYS_PER_MONTH = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return NUMBER_OF_WORK_HOURS_PER_DAY * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const NUMBER_OF_FULL_PRICE_DAYS = numDays % NUMBER_OF_BILLABLE_DAYS_PER_MONTH;
  const NUMBER_OF_DISCOUNTED_DAYS = numDays - NUMBER_OF_FULL_PRICE_DAYS;
  const DAY_RATE_VALUE = dayRate(ratePerHour);

  return Math.ceil(
    NUMBER_OF_DISCOUNTED_DAYS * DAY_RATE_VALUE * (1 - discount) + NUMBER_OF_FULL_PRICE_DAYS * DAY_RATE_VALUE
  );
}
