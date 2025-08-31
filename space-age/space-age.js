// @ts-check

/**
 * Return the age in years on a given planet
 * @param {string} planet - A planet in the solar system
 * @param {number} age - Age in seconds
 * @returns {number} The age in years on the given planet, rounded to two decimal places
 */
export const age = (planet, age) => {
  const earthYear = 31557600;
  const orbitalPeriod = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  // Check if the supplied planet is valid
  if (!orbitalPeriod.hasOwnProperty(planet)) {
    throw new Error('not a planet');
  }

  // Calculate the age on a given planet and round to 2 decimals with Number((calculation).toFixed())
  return Number((age / (earthYear * orbitalPeriod[planet])).toFixed(2));
};
