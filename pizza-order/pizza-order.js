/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const basePrices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
  };

  const extraPrices = {
    ExtraSauce: 1,
    ExtraToppings: 2,
  };

  function calcExtras(extrasList) {
    if (extrasList.length === 0) {
      return 0;
    }
    const [first, ...rest] = extrasList;
    return (extraPrices[first] || 0) + calcExtras(rest);
  }

  return basePrices[pizza] + calcExtras(extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((total, order) => {
    return total + pizzaPrice(order.pizza, ...order.extras);
  }, 0);
}
