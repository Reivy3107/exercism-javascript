// @ts-check

/**
 * A class representing a numeric matrix with rows and columns.
 */
export class Matrix {
  /** @type {number[][]} */
  #rows;

  /** @type {number[][]} */
  #columns;

  /**
   * Create a Matrix from a string representation.
   *
   * @param {string} matrixString - A string representing the matrix, with rows
   * separated by newlines and values separated by spaces.
   *
   * @example
   * const m = new Matrix("9 8 7\n5 3 2\n6 6 7");
   */
  constructor(matrixString) {
    this.#rows = matrixString.split('\n').map((line) => line.split(' ').map(Number));

    this.#columns = this.#rows[0].map((_, colIndex) => this.#rows.map((row) => row[colIndex]));
  }

  /**
   * The rows of the matrix.
   *
   * @type {number[][]}
   */
  get rows() {
    return this.#rows;
  }

  /**
   * The columns of the matrix.
   *
   * @type {number[][]}
   */
  get columns() {
    return this.#columns;
  }
}
