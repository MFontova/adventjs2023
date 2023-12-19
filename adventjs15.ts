const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'U', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/

// const store = ['..!.*.....']
// const movements = ['R', 'R', 'L', 'R', 'L', 'L', 'L', 'L']
// const result = autonomousDrive(store, movements)
// console.log(result)

function autonomousDrive(store: Array<string>, movements: Array<string>) {
  let robotY: number = 0
  let robotX: number = 0

  for (let i = 0; i < store.length; i++) {
    if (store[i].includes('!')) {
      robotY = i
      robotX = store[i].indexOf('!')
    }
  }

  let storeMatrix: Array<Array<String>> = []

  for (const level of store) {
    storeMatrix.push(level.split(''))
  }

  for (const movement of movements) {
    switch (movement) {
      case 'R':
        if (storeMatrix[robotY][robotX + 1] === '.') {
          robotX++
          storeMatrix[robotY][robotX] = '!'
          storeMatrix[robotY][robotX - 1] = '.'
        }
        break;

      case 'L':
        if (storeMatrix[robotY][robotX - 1] === '.') {
          robotX--
          storeMatrix[robotY][robotX] = '!'
          storeMatrix[robotY][robotX + 1] = '.'
        }
        break;

      case 'U':
        if (robotY - 1 >= 0) {
          if (storeMatrix[robotY - 1][robotX] === '.') {
            robotY--
            storeMatrix[robotY][robotX] = '!'
            storeMatrix[robotY + 1][robotX] = '.'
          }
        }
        break;

      case 'D':
        if (robotY + 1 <= storeMatrix.length - 1)
          if (storeMatrix[robotY + 1][robotX] === '.') {
            robotY++
            storeMatrix[robotY][robotX] = '!'
            storeMatrix[robotY - 1][robotX] = '.'
          }
        break;

      default:
        break;
    }
  }

  return storeMatrix.map(i => i.join(''))
}