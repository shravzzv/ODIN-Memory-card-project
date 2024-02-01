/**
 * Fisher-Yates Shuffle Algorithm for shuffling an array.
 *
 * @param {Array} array - The original array to be shuffled.
 * @returns {Array} - A new array representing the shuffled order of the original elements to avoid mutating the original.
 */

export default function fisherYatesShuffle(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
