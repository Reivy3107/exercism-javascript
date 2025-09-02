// @ts-check

/**
 * Determine if a number is perfect, abundant, or deficient
 * based on Nicomachus' (60 - 120 CE) classification scheme for positive integers.
 * @param {number} number A number
 * @return {string} The classification of the number
 * @throw If the number is not a natural number
 */
export const classify = (number) => {
  // Handle errors
  if (!Number.isInteger || number < 1) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  // Handle edge case
  if (number === 1) return 'deficient';

  // Compute the aliquotSum
  let aliquotSum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) aliquotSum += i;
  }

  // Return the classification
  return aliquotSum === number ? 'perfect' : aliquotSum > number ? 'abundant' : 'deficient';
};
