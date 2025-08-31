// @ts-check

/**
 * Return the date and time one gigasecond after a certain date
 * @param {Date} date - A date
 * @returns {Date} - The date after one gigasecond has elapsed
 */
export const gigasecond = (date) => new Date(date.getTime() + 1000000000000);
