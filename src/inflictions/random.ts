/**
 * Helper file for stubbing randomness.
 *
 * Returns an integer in [0,max). (0 inclusive, max exclusive).
 */
const getRandomInt = (max : number) : number => Math.floor(Math.random() * 1000000) % max

export { getRandomInt }