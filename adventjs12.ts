console.log(checkIsValidCopy('Santa Claus is coming', 'pa#ta cl#us is comin#')) // true
// console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')) // false (por la p inicial)
// console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
// console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)

function checkIsValidCopy(original: string, copy: string) {
  let isCopy = false
  for (let i = 0; i < original.length; i++) {
    if (original[i] === copy[i]) {
      isCopy = true
    } else if (original[i].toLowerCase() === copy[i]) {
      isCopy = true
    } else if (copy[i] !== null) {
      console.log(copy[i])
      // isCopy = true
    } else {
      isCopy = false
    }
  }
  return isCopy
}