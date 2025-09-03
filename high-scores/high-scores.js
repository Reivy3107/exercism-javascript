// @ts-check

/**
 * Represents a score tracker.
 * @constructor
 * @param {number[]} input - A list of scores
 *
 * @example
 * const highScores = new HighScores([30, 50, 20, 70]);
 * console.log(highScores.scores);           // [30, 50, 20, 70]
 * console.log(highScores.latest);           // 70
 * console.log(highScores.personalBest);     // 70
 * console.log(highScores.personalTopThree); // [70, 50, 30]
 */
export class HighScores {
  /** @type {number[]} */
  #scores;

  /**
   * @param {number[]} input
   */
  constructor(input) {
    this.#scores = input;
  }

  /** @returns {number[]} */
  get scores() {
    return [...this.#scores];
  }

  /** @returns {number} */
  get latest() {
    return this.#scores[this.#scores.length - 1];
  }

  /** @returns {number} */
  get personalBest() {
    return Math.max(...this.#scores);
  }

  /** @returns {number[]} */
  get personalTopThree() {
    return [...this.#scores].sort((a, b) => b - a).slice(0, 3);
  }
}
