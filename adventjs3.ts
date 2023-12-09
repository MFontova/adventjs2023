// const original = 'abcd'
// const modified = 'abcde'
// console.log(findNaughtyStep(original, modified)) // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// console.log(findNaughtyStep(original, modified)) // 'f'

const original = 'abcde'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // ''

function findNaughtyStep(original: string, modified: string) {
  if(original === modified) {
    return ''
  }

  const length: number = Math.min(original.length, modified.length)
  let longString: string
  let shortString: string

  if(original.length > modified.length) {
    longString = original
    shortString = modified
  } else {
    longString = modified
    shortString = original
  }

  for (let i = 0; i < longString.length; i++) {
    if(longString[i] !== shortString[i]) {
      return longString[i]
    }
  }
}
