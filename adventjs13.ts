console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// // '-02:20:00'

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

function calculateTime(deliveries: Array<String>) {
  let totalSeconds: number = 0
  let positive: boolean = false
  for (const delivery of deliveries) {
    const deliveryArray = delivery.split(':').map(e => Number(e))
    for (let i = 0; i < deliveryArray.length; i++) {
      switch (i) {
        case 0:
          totalSeconds += deliveryArray[0] * 3600
          break

        case 1:
          totalSeconds += deliveryArray[1] * 60
          break

        case 2:
          totalSeconds += deliveryArray[2]
          break
      }
    }
  }

  if (totalSeconds < 25200) {
    positive = false
  } else {
    positive = true
  }

  let restTime = Math.abs(totalSeconds - 25200)

  const hours = Math.floor(restTime / 3600)

  const minutes = Math.floor(((restTime / 3600) - hours) * 60)

  const seconds = Math.round((((restTime / 3600) - hours) * 60 - minutes) * 60)

  let hoursString = hours.toString().padStart(2, '0')
  let minutesString = minutes.toString().padStart(2, '0')
  let secondsString = seconds.toString().padStart(2, '0')

  if (!positive) {
    hoursString = '-' + hoursString
  }

  return `${hoursString}:${minutesString}:${secondsString}`
}
