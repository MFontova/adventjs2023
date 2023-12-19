function maxGifts(houses: Array<number>) {
  if (houses.length === 0) { return 0 }
  if (houses.length === 1) { return houses[0] }

  let noAdj = houses[0]
  let adj = Math.max(houses[0], houses[1])


  for (let i = 2; i < houses.length; i++) {
    let temp = Math.max(houses[i] + noAdj, adj)
    noAdj = adj
    adj = temp
  }

  return Math.max(adj, noAdj)
}

console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)
console.log(maxGifts([3, 8, 7, 1]))
console.log(maxGifts([8, 7, 1, 3]))