const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

function cyberReindeer(road: string, time: number) {
  let steps: Array<String> = []
  let newRoad = ''
  let sIndex = 0
  for (let i = 0; i < time; i++) {
    if(i === 5) {
      road = road.replaceAll('|', '*')
    }

    if(road[sIndex] !== '|') {
      let roadArray = road.split('')
      roadArray[sIndex] = 'S'
      if(i > 0) {roadArray[0] = '.'}
      newRoad = roadArray.join('')
      sIndex++
    }
    
    steps.push(newRoad)
  }

  return steps
}