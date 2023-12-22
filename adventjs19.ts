const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))

function revealSabotage(store: Array<Array<string>>) {
  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] !== '*') {
        let bombCounter = 0
        if (i === 0) {
          bombCounter += checkSameLine(i, j, bombCounter)
          console.log(i, j, bombCounter)
          bombCounter += checkBottomLine(i, j, bombCounter)
          store[i][j] = bombCounter === 0 ? ' ' : bombCounter.toString()
        } else if (i === store.length - 1) {
          bombCounter += checkSameLine(i, j, bombCounter)
          bombCounter += checkUpLine(i, j, bombCounter)
          store[i][j] = bombCounter === 0 ? ' ' : bombCounter.toString()
        } else {
          bombCounter += checkSameLine(i, j, bombCounter)
          bombCounter += checkUpLine(i, j, bombCounter)
          bombCounter += checkBottomLine(i, j, bombCounter)
          store[i][j] = bombCounter === 0 ? ' ' : bombCounter.toString()
        }
      }
    }
  }

  function checkUpLine(i: number, j: number, counter: number) {
    if (store[i - 1][j - 1] === '*') {
      return 1
    } else if (store[i - 1][j] === '*') {
      return 1
    } else if (store[i - 1][j + 1] === '*') {
      return 1
    } else {
      return 0
    }
  }

  function checkSameLine(i: number, j: number, counter: number) {
    if (store[i][j - 1] === '*') {
      return 1
    } else if (store[i][j + 1] === '*') {
      return 1
    } else {
      return 0
    }
  }

  function checkBottomLine(i: number, j: number, counter: number) {
    console.log(i, j, counter, '\n')
    if (store[i + 1][j - 1] === '*') {
      return 1
    } else if (store[i + 1][j] === '*') {
      return 1
    } else if (store[i + 1][j + 1] === '*') {
      return 1
    } else {
      return 0
    }
  }

  return store
}