calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// '00:30:00'

calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
]) // '-05:29:00'

function calculateTime(deliveries: Array<string>) {
  let sum = { 'hours': 0, 'minutes': 0, 'seconds': 0 }

  let difference = { 'hours': 7, 'minutes': 0, 'seconds': 0 }

  for (const delivery of deliveries) {
    let deliveryArray = delivery.split(':').reverse().map(i => parseInt(i))
    sum['seconds'] += deliveryArray[0]
    if (sum['seconds'] >= 60) {
      sum['minutes'] = Math.floor(sum['seconds'] / 60)
      sum['seconds'] = sum['seconds'] % 60
    }
    sum['minutes'] += deliveryArray[1]
    if (sum['minutes'] >= 60) {
      sum['hours'] = Math.floor(sum['minutes'] / 60)
      sum['minutes'] = sum['minutes'] % 60
    }
    sum['hours'] += deliveryArray[2]

    // console.log(deliveryArray)
  }
  console.log('dif', difference)
  console.log('sum', sum)

  if (difference['seconds'] === sum['seconds']) {
    difference['seconds'] = 0
  } else if (difference['seconds'] > sum['seconds']) {
    difference['seconds'] = difference['seconds'] - sum['seconds']
  } else {
    difference['seconds'] = difference['seconds'] + 60 - sum['seconds']
    difference['minutes'] += 1
  }

  if (difference['minutes'] === sum['minutes']) {
    difference['minutes'] = 0
  } else if (difference['minutes'] > sum['minutes']) {
    difference['minutes'] = difference['minutes'] - sum['minutes']
  } else {
    difference['minutes'] = difference['minutes'] + 60 - sum['minutes']
    difference['hours'] += 1
  }

  if (difference['hours'] === sum['hours']) {
    difference['hours'] = 0
  }

  console.log('result', difference)

  console.log('\n')
  return '00:00:00'
}