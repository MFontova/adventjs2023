const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5

const giftIds4 = [1, 3, 4, 5, 0, 1, 3, 0, 7]
const firstRepeatedId4 = findFirstRepeated(giftIds4)
console.log(firstRepeatedId4) // 5

function findFirstRepeated(gifts: Array<number>){
  let giftsArray: Array<number> = []

  for (const gift of gifts) {
    if(giftsArray.includes(gift)) {
      return gift
    } else if(!giftsArray.includes(gift)) {
      giftsArray.push(gift)
    }
  }
  return -1
}