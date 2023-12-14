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

console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']))

console.log(calculateTime(['02:00:00', '03:00:00', '02:00:00']))

function calculateTime(deliveries: Array<string>) {
  let totalTime = { 'hours': 7, 'minutes': 0, 'seconds': 0 }
  let positive = false
  let maxSeconds = 7 * 3600
  let spendSeconds = 0

  for (const delivery of deliveries) {
    let deliveryArray = delivery.split(':').map(i => parseInt(i))
    if (totalTime['seconds'] < deliveryArray[2]) {
      totalTime['seconds'] = 60 + totalTime['seconds'] - deliveryArray[2]
      totalTime['minutes'] -= 1
    } else if (totalTime['seconds'] > deliveryArray[2]) {
      totalTime['seconds'] -= deliveryArray[2]
    }

    if (totalTime['minutes'] < deliveryArray[1]) {
      totalTime['minutes'] = 60 + totalTime['minutes'] - deliveryArray[1]
      totalTime['hours'] === 0 ? totalTime['hours'] = 0 : totalTime['hours'] -= 1
    } else if (totalTime['minutes'] > deliveryArray[1]) {
      totalTime['minutes'] -= deliveryArray[1]
    }

    if (totalTime['hours'] > deliveryArray[0]) {
      totalTime['hours'] -= deliveryArray[0]
      positive = false
    } else if (totalTime['hours'] <= deliveryArray[0]) {
      totalTime['hours'] = totalTime['hours'] - deliveryArray[0]
      positive = true
    }

    spendSeconds += totalTime.hours * 3600 + totalTime.minutes * 60 + totalTime.seconds

  }
  console.log(maxSeconds, spendSeconds)

  positive = spendSeconds <= maxSeconds

  let hours = totalTime.hours.toString().padStart(2, '0')
  hours = positive ? hours : '-' + hours
  let minutes = totalTime.minutes.toString().padStart(2, '0')
  let seconds = totalTime.seconds.toString().padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
}
