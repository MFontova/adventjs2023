const result1:string = organizeGifts(`20a`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
*/

function organizeGifts(gifts:string) {
  const matched = gifts.matchAll(/\d+[a-z]/g)

  let giftsArray: Array<string> = []

  for (const i of matched) {
     giftsArray.push(i[0])
  }

  let result = ''

  giftsArray.forEach(e => {
    let number = Number(e.slice(0, -1))
    let gift = e.slice(-1)

    while(number > 0) {
      if(number > 50) {
        result = result.concat(`[${gift}]`)
        number = number - 50
      } else if(number >= 10) {
        result = result.concat(`{${gift}}`)
        number = number - 10
      } else {
        result = result.concat(`(${gift.repeat(number)})`)
        number = 0
      }
    }
  })
  return result
}