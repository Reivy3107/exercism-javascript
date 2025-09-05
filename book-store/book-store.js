// @ts-check

/**
 * Calculates the cost for a given list of books based on defined discounts
 * @param {number[]} books An array of book ids
 * @returns {number} The total price of the basket
 */
export const cost = (books) => {
  const booksCopy = [...books];
  let x = booksCopy.length * 800;
  let discounts = { 5: 0.25, 4: 0.2, 3: 0.1, 2: 0.05 };
  let bookSet = [];

  while (booksCopy.length > 0) {
    bookSet.push(new Set(booksCopy).size);
    for (let book of new Set(booksCopy)) {
      booksCopy.splice(booksCopy.indexOf(book), 1);
    }
  }

  while (bookSet.includes(3) && bookSet.includes(5)) {
    bookSet.splice(bookSet.indexOf(3), 1);
    bookSet.splice(bookSet.indexOf(5), 1);
    bookSet.push(4, 4);
  }

  return x - bookSet.reduce((prev, curr) => prev + (discounts[curr] || 0) * 800 * curr, 0);
};
