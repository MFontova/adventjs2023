// console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')) // true
// console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')) // false (por la p inicial)
// console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
// console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)
console.log(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s'))

function checkIsValidCopy(original: string, copy: string) {
  const charArray = ['#', '+', ':', '.', ' ']
  let isCopy = false
  for (let i = 0; i < original.length; i++) {
    if (original[i] === copy[i]) {
      // console.log(original)
      // console.log(original[i], copy[i])
      isCopy = true
    } else if (original[i].toLowerCase() === copy[i]) {
      isCopy = true
    } else if (original[i] !== ' ' && charArray.includes(copy[i])) {
      if (charArray.indexOf(original[i]) < charArray.indexOf(copy[i])) {
        isCopy = true
      } else {
        isCopy = false
        break
      }
      // isCopy = true
    } else {
      isCopy = false
      break
    }
  }
  return isCopy
}