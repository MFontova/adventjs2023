maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)

function maxGifts(houses: Array<number>) {
  let maxValue = 0
  for (let i = 0; i < houses.length; i++) {
    if (houses.length >= i) {
      for (let j = i + 1; j < houses.length; j = j + 2) {
        if (houses.length >= j) {
          for (let k = j + 1; k < houses.length; k = k + 2) {
            maxValue += houses[k]
          }
        }
      }
    }
  }
  console.log(maxValue, '\n')
}