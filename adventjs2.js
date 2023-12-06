const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials))

function manufacture(gifts, materials) {
  var possibleGifts = []

  gifts.forEach(gift => {
    var lettersArray = gift.split('')
    var materialsArray = materials.split('')

    var possibleArray = []

    lettersArray.forEach(letter => {
      if(materialsArray.includes(letter)) {
        possibleArray.push(letter)
      } else {
      }
    })
    if(possibleArray.join('') === gift) {
      possibleGifts.push(gift)
    }
  });
  
  return possibleGifts
}