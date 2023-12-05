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

function findFirstRepeated(gifts) {
  var position = gifts.length

  for (let i = 1; i < gifts.length; i++) {
    slicedArray = gifts.slice(i)
    var elementoABuscar = gifts[i - 1]

    var index = slicedArray.indexOf(elementoABuscar) === -1
      ? slicedArray.indexOf(elementoABuscar)
      : slicedArray.indexOf(elementoABuscar) + i

    if (index === -1) {
      continue
    } else if (index < position) {
      position = index
    }
  }
  return gifts.length == position ? -1 : gifts[position]
}
