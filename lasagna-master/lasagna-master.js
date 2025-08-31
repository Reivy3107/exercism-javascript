/// <reference path="./global.d.ts" />

import { log } from 'console';

// @ts-check

/**
 *
 * @param {number} remainingTime
 * @returns {string} The cooking status
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) return 'Lasagna is done.';
  if (!remainingTime) return 'You forgot to set the timer.';

  return 'Not done, please wait.';
}

/**
 * Calulate the preparation time of a lasagna
 * @param {string[]} layers layers list
 * @param {number} averagePrepTime average prep time per layer in minutes, default = 2
 * @returns {number} The total preparation time
 */
export function preparationTime(layers, averagePrepTime = 2) {
  return layers.length * averagePrepTime;
}

/**
 * Calculate the quantity of sauce and noodles needed
 * @param {string[]} layers layers list
 * @returns {{noodles: number, sauce: number}} The quantity of sauce and noodles
 */
export function quantities(layers) {
  let noodlesQty = 0;
  let sauceQty = 0;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'sauce') sauceQty += 0.2;
    if (layers[i] === 'noodles') noodlesQty += 50;
  }

  return { noodles: noodlesQty, sauce: sauceQty };
}

/**
 * Add a secret ingredient from your friend's recipe to your recipe
 * @param {string[]} friendsList friend recipe list
 * @param {string[]} myList user recipe list
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 *
 * @param {string[]} recipe list of ingredients
 * @param {number} numberOfPortions number of desired portions
 * @returns {Record<string, number>} The scaled recipe
 */
export function scaleRecipe(recipe, numberOfPortions) {
  const newRecipe = {};

  for (const ingredient in recipe) {
    newRecipe[ingredient] = (recipe[ingredient] / 2) * numberOfPortions;
  }

  return newRecipe;
}
