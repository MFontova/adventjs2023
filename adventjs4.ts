const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

function decode(message: string) {
  let startIndex: number = 0
  let endIndex: number = 0

  for (let i = 0; i < message.split('').length; i++) {
    if(message[i] === '(') {
      startIndex = i
    } else if(message[i] === ')') {
      endIndex = i
      break
    }
  }

  let substring = message.substring(startIndex, endIndex+1)
  let reversedSubstring = substring.split('').reverse().join('').slice(1, -1)

  let newMessage = message.replace(substring, reversedSubstring)

  if(newMessage.includes('(')) {
    newMessage = decode(newMessage)
  }

  return newMessage
}