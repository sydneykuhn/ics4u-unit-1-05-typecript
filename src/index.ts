/**
 * This program tells you the length
 * required for a board foot.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-10-10
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const min = 0

/**
 * @param {number} width of the wood
 * @param {number} height of the wood
 * @returns {number} length of the wood
 */
function boardFootCalculator(width: number, height: number): number {
  const BOARD_FOOT_VOLUME = 144
  const length = BOARD_FOOT_VOLUME / (width * height)
  return length
}

console.log('1 Board Foot is equal to 144³ inches of wood.')
console.log(
  'This program calculates the length of a board ' +
    'foot based on the width and height.\n'
)

// Input
const widthString = prompt('Enter the width of the wood in inches : ')
const width = parseFloat(widthString)
const heightString = prompt('Enter the height of the wood in inches : ')
const height = parseFloat(heightString)

// Process and Output
if (isNaN(width) || isNaN(height)) {
  console.log('\nInvalid Input Entered.')
} else if (width <= min || height <= min) {
  console.log('\nImpossible Solution.')
} else {
  const length = boardFootCalculator(width, height)
  console.log(`\nThe length of the wood should be ${length} inch(es) long.`)
}

console.log('\nDone.')
