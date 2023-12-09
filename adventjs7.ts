console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/

console.log(drawGift(8, '*'))

function drawGift(size: number, symbol: string) {
  if(size === 1) {
    return '#\n'
  }
  let draw: string = ''
  let border: string = '#'
  let line: string = ''
  const end: number = size * 2 - 1
  let substract: number = size - 2
  for (let i = 0; i < size*2 - 1; i++) {

    if(i === 0) {
      line = border.repeat(size).padStart(size * 2 - 1).concat('\n')
      draw = draw.concat(line)
    }else if(i === size * 2 - 2) {
      line = border.repeat(size).concat('\n')
      draw = draw.concat(line)
    }else if(i < size - 1) {
      line = border + symbol.repeat(size - 2) + border + symbol.repeat(i - 1) + border.concat('\n')
      line = line.padStart(size * 2)
      draw = draw.concat(line)
    }else if(i === size - 1) {
      line = border.repeat(size) + symbol.repeat(size - 2) + border.concat('\n')
      draw = draw.concat(line)
    }else if(i >= size) {
      substract = substract - 1
      line = border + symbol.repeat(size - 2) + border + symbol.repeat(substract) + border.concat('\n')
      draw = draw.concat(line)
    }
  }
  return draw
}