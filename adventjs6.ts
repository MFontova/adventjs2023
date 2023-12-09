// const movements = '>>*<'
// const result1 = maxDistance(movements)
// console.log(result1) // -> 2

// const movements2 = '<<<>'
// const result2 = maxDistance(movements2)
// console.log(result2) // -> 2

// const movements3 = '>***>'
// const result3 = maxDistance(movements3)
// console.log(result3) // -> 5

function maxDistance(movements: String) {
  let rightSteps: number = 0
  let leftSteps: number = 0
  let wildcardSteps: number = 0

  let movementsArray = movements.split('')

  movementsArray.forEach(e => {
    if(e === '>') {
      rightSteps++
    } else if(e === '<') {
      leftSteps++
    } else if(e === '*') {
      wildcardSteps++
    }
  })

  const stepsToAdd = Math.max(rightSteps, leftSteps)
  const stepsToSubstract = Math.min(rightSteps, leftSteps)

  let maxSteps = stepsToAdd + wildcardSteps - stepsToSubstract
  return maxSteps
}