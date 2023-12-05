const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials)

function manufacture(gifts, materials) {
  gifts.forEach(gift => {
    var letters = gift.split('')
    var possible = false
    console.log(letters)
    materials.split('').forEach(material => {
      // console.log(typeof material)
      var found = letters.find(letter => letter === material)
      console.log('found', found)
      if (found) {
        possible = true
      } else {
        possible = false
      }
      // if (letters.include(material)) {
      //   possible = true
      // } else {
      //   possible = false
      // }
    })
    console.log(gift, possible)
    // possible ? possibleGifts.push(gift) : null
  });
  var possibleGifts = []


  return possibleGifts
}