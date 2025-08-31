// @ts-check

/**
 * Determine the Collatz Conjecture of a number
 * @param {number} number A positive integer number
 * @return {number} - The number of steps required to reach 1
 */
export const steps = (number) => {
  let steps = 0;

  if (!Number.isInteger(number) || number < 1) {
    throw new Error('Only positive integers are allowed');
  }

  while (number !== 1) {
    if (number % 2 === 0) {
      number = number / 2;
    } else {
      number = number * 3 + 1;
    }

    steps++;
  }

  return steps;
};
