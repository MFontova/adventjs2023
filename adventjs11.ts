console.log('result', getIndexsForPalindrome('anna')) // []
console.log('result', getIndexsForPalindrome('abab')) // [0, 1]
console.log('result', getIndexsForPalindrome('abac')) // null
console.log('result', getIndexsForPalindrome('aaaaaaaa')) // []
console.log('result', getIndexsForPalindrome('aaababa')) // [1, 3]
console.log('result', getIndexsForPalindrome('caababa')) // null

function getIndexsForPalindrome(word: string) {
  if (word === word.split('').reverse().join('')) {
    return []
  }

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      let wordArray = word.split('')
      let temp = wordArray[i]
      wordArray[i] = wordArray[j]
      wordArray[j] = temp
      if (wordArray.join('') === wordArray.reverse().join('')) {
        return [i, j]
      }
    }

  }
  return null
}
