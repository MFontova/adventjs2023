console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)

function adjustLights(lights: Array<string>) {
  if(lights.length < 2) {
    return 0
  }
  let changes1: number = 0
  let changes2: number = 0

  for (let i = 0; i < lights.length; i++) {
    if(i % 2 === 0) {
      if(lights[i] === '🔴') {
        changes1++
      } else {
        changes2++
      }
    } else {
      if(lights[i] === '🟢') {
        changes1++
      } else {
        changes2++
      }
    }
  }
  return Math.min(changes1, changes2)
}