// @ts-check

/**
 * Represents a Bank Account and allows basic operations on it.
 *
 * Accounts start closed (balance = null)
 * @example
 * const account = new BankAccount();
 * account.open();
 * account.deposit(100);
 * account.withdraw(40);
 * console.log(account.balance); // 60
 *
 * account.close();
 */
export class BankAccount {
  /** @type {number | null} The current balance or `null` if the account is closed. */
  #balance;

  constructor() {
    this.#balance = null;
  }

  /**
   * Opens the account with a balance of 0.
   * @throws {ValueError} If the account is already open.
   * @returns {void}
   */
  open() {
    if (this.#balance !== null) {
      throw new ValueError();
    }
    this.#balance = 0;
  }

  /**
   * Closes the account.
   * @throws {ValueError} If the account is already closed.
   * @returns {void}
   */
  close() {
    if (this.#balance === null) {
      throw new ValueError();
    }
    this.#balance = null;
  }

  /**
   * Deposits money into the account.
   * @param {number} value - The amount to deposit. Must be greater than 0.
   * @throws {ValueError} If the account is closed or the value is invalid.
   * @returns {void}
   */
  deposit(value) {
    if (this.#balance === null || value < 1) {
      throw new ValueError();
    }
    this.#balance += value;
  }

  /**
   * Withdraws money from the account.
   * @param {number} value - The amount to withdraw. Must be greater than 0 and not exceed the balance.
   * @throws {ValueError} If the account is closed, the value is invalid, or funds are insufficient.
   * @returns {void}
   */
  withdraw(value) {
    if (this.#balance === null || value < 1 || this.#balance < value) {
      throw new ValueError();
    }
    this.#balance -= value;
  }

  /**
   * Gets the current account balance.
   * @throws {ValueError} If the account is closed.
   * @returns {number} The current balance.
   */
  get balance() {
    if (this.#balance === null) {
      throw new ValueError();
    }
    return this.#balance;
  }
}

/**
 * Error thrown when an invalid operation is attempted on a BankAccount.
 */
export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
