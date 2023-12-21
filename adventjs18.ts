console.log(drawClock('01:30'))

function drawClock(time: String) {
  let result: Array<Array<string>> = []
  for (let i = 0; i < 7; i++) {
    let line: Array<string> = []
    for (let j = 0; j < 17; j++) {
      line.push(' ')
    }
    result.push(line)
  }
  return result
}