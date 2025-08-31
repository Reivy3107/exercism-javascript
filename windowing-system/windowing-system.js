// @ts-check

/**
 * Represents the size (width * height) of a window
 * @constructor
 * @param {number} [width = 80] - The initial width
 * @param {number} [height = 60] - The initial height
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 * Resize this Size instance
 * @method
 * @param {number} newWidth - The new width
 * @param {number} newHeight - The new height
 * @return {void}
 */
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 * Represents the position (x y) of a window
 * @constructor
 * @param {number} [x = 0] - The initial horizontal value
 * @param {number} [y = 0] - The initial vertical value
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/**
 * Moves this Position instance
 * @method
 * @param {number} newX - The new horizontal value
 * @param {number} newY - The new vertical value
 * @return {void}
 */
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

/**
 * Represents a Program Window
 */
export class ProgramWindow {
  constructor() {
    /**
     * @type {Size}
     */
    this.screenSize = new Size(800, 600);

    /**
     * @type {Size}
     */
    this.size = new Size();

    /**
     * @type {Position}
     */
    this.position = new Position();
  }

  /**
   * Resize this Program Window
   * @param {Size} newSize - The new size of the window
   * @return {void}
   */
  resize(newSize) {
    this.size.width = newSize.width;
    this.size.height = newSize.height;

    // Clamp to minimum size of 1
    this.size.width = Math.max(this.size.width, 1);
    this.size.height = Math.max(this.size.height, 1);

    // Clam to maximum space available
    this.size.width = Math.min(this.size.width, this.screenSize.width - this.position.x);
    this.size.height = Math.min(this.size.height, this.screenSize.height - this.position.y);
  }

  /**
   * Move this Program Window
   * @param {Position} newPosition
   * @return {void}
   */
  move(newPosition) {
    this.position.x = newPosition.x;
    this.position.y = newPosition.y;

    // Clamp to minumum position of 0,0
    this.position.x = Math.max(this.position.x, 0);
    this.position.y = Math.max(this.position.y, 0);

    // Clamp to maximum position possible according to screen size
    this.position.x = Math.min(this.position.x, this.screenSize.width - this.size.width);
    this.position.y = Math.min(this.position.y, this.screenSize.height - this.size.height);
  }
}

/**
 * Modify a Program Window to size 400x300 and move it to position 100, 150
 * @param {ProgramWindow} newProgramWindow - The program window to modify
 * @returns {ProgramWindow} - The modified program window
 */
export function changeWindow(newProgramWindow) {
  const size = new Size(400, 300);
  newProgramWindow.resize(size);

  const position = new Position(100, 150);
  newProgramWindow.move(position);

  return newProgramWindow;
}
