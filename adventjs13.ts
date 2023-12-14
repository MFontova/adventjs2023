console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

console.log(calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
])) // '-05:29:00'

function calculateTime(deliveries: Array<string>) {
  let sum = { 'hours': 0, 'minutes': 0, 'seconds': 0 }

  let difference = { 'hours': 7, 'minutes': 0, 'seconds': 0 }

  for (const delivery of deliveries) {
    let deliveryArray = delivery.split(':').reverse().map(i => parseInt(i))
    sum['seconds'] += deliveryArray[0]
    if (sum['seconds'] >= 60) {
      // sum['minutes'] = Math.floor(sum['seconds'] / 60)
      sum['minutes'] += 1 
      sum['seconds'] = sum['seconds'] % 60
    }
    sum['minutes'] += deliveryArray[1]
    if (sum['minutes'] >= 60) {
      sum['hours'] = Math.floor(sum['minutes'] / 60)
      sum['minutes'] = sum['minutes'] % 60
    }
    sum['hours'] += deliveryArray[2]
  }

  console.log('dif', difference)
  console.log('sum', sum)

  if (difference['hours'] === sum['hours']) {
    difference['hours'] = 0
  } else {
    difference['hours'] -= sum['hours']
  }

  if (difference['minutes'] === sum['minutes']) {
    difference['minutes'] = 0
  } else if (difference['minutes'] > sum['minutes']) {
    difference['minutes'] = difference['minutes'] - sum['minutes']
  } else {
    difference['minutes'] = difference['minutes'] + 60 - sum['minutes']
    difference['hours'] = difference['hours'] === 0 ? 0 : difference['hours'] -= 1
  }

  if (difference['seconds'] === sum['seconds']) {
    difference['seconds'] = 0
  } else if (difference['seconds'] > sum['seconds']) {
    difference['seconds'] = difference['seconds'] - sum['seconds']
  } else {
    difference['seconds'] = difference['seconds'] + 60 - sum['seconds']
    difference['minutes'] += 1
  }

  // if(difference['hours'] > sum['hours']) {
  //   difference['hours'] = -(difference['hours'])
  // } else if (difference['hours'] === sum['hours'] && difference['minutes'] > sum['minutes']) {
  //   difference['hours'] = -(difference['hours'])
  // } else if (difference['seconds'] > sum['seconds']) {
  //   difference['hours'] = -(difference['hours'])
  // }

  console.log('result', difference)

  console.log('\n')
  let result = difference['hours'].toString().padStart(2, '0') + ':' + difference['minutes'].toString().padStart(2, '0') + ':' + difference['seconds'].toString().padStart(2, '0')

  if(difference['hours'].toString().padStart(2, '0') + difference['minutes'].toString().padStart(2, '0') + difference['seconds'].toString().padStart(2, '0') > sum['hours'].toString().padStart(2, '0') + sum['minutes'].toString().padStart(2, '0') + sum['seconds'].toString().padStart(2, '0')) {
    console.log('negative', result)
  }
}