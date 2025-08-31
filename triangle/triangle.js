// @ts-check

/**
 * Represents a triangle and allows checking its type.
 */
export class Triangle {
  /**
   * Create a triangle with three sides.
   * @param {number} a - Length of side A
   * @param {number} b - Length of side B
   * @param {number} c - Length of side C
   */
  constructor(a, b, c) {
    const [sideA, sideB, sideC] = [a, b, c];
    /** @private @type {number[]} */
    this.sides = [sideA, sideB, sideC];

    /** @private @type {boolean} */
    this.isValid =
      sideA > 0 && sideB > 0 && sideC > 0 && sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA;
  }

  /**
   * Checks if the triangle is equilateral (all sides equal).
   * @type {boolean}
   */
  get isEquilateral() {
    const [a, b, c] = this.sides;
    return this.isValid && a === b && b === c;
  }

  /**
   * Checks if the triangle is isosceles (at least two sides equal).
   * @type {boolean}
   */
  get isIsosceles() {
    const [a, b, c] = this.sides;
    return this.isValid && (a === b || b === c || a === c);
  }

  /**
   * Checks if the triangle is scalene (all sides different).
   * @type {boolean}
   */
  get isScalene() {
    const [a, b, c] = this.sides;
    return this.isValid && a !== b && b !== c && a !== c;
  }
}
