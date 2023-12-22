console.log(drawClock('01:30'))

function drawClock(time: String) {
  const zero = [
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
  ]
  const one = [
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
  ]
  const two = [
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
    ['*', ' ', ' '],
    ['*', ' ', ' '],
    ['*', '*', '*'],
  ]
  const three = [
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
  ]
  const four = [
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
  ]
  const five = [
    ['*', '*', '*'],
    ['*', ' ', ' '],
    ['*', ' ', ' '],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
  ]
  const six = [
    ['*', '*', '*'],
    ['*', ' ', ' '],
    ['*', ' ', ' '],
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
  ]
  const seven = [
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
  ]
  const eight = [
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
  ]
  const nine = [
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
  ]
  const dots = [
    [' '],
    [' '],
    ['*'],
    [' '],
    ['*'],
    [' '],
    [' '],
  ]

  const timeArray = time.split('')
  let result: Array<Array<string>> = [[], [], [], [], [], [], [],]

  for (let i = 0; i < timeArray.length; i++) {
    switch (timeArray[i]) {
      case '0':
        addNumber(zero)
        break

      case '1':
        addNumber(one)
        break

      case '2':
        addNumber(two)
        break

      case '3':
        addNumber(three)
        break

      case '4':
        addNumber(four)
        break

      case '5':
        addNumber(five)
        break

      case '6':
        addNumber(six)
        break

      case '7':
        addNumber(seven)
        break

      case '8':
        addNumber(eight)
        break

      case '9':
        addNumber(nine)
        break

      case ':':
        addDots()
        break;
    }
  }

  function addNumber(number: Array<Array<string>>) {
    for (let j = 0; j < number.length; j++) {
      result[j] = result[j].concat(number[j])
      result[j] = result[j].concat([' '])
    }
  }

  function addDots() {
    for (let j = 0; j < dots.length; j++) {
      result[j] = result[j].concat(dots[j])
      result[j] = result[j].concat([' '])
    }
  }

  for (const row of result) {
    row.pop()
  }
  return result
}
