console.log(createChristmasTree('abc', 5))

function createChristmasTree(ornaments: string, height: number) {
  let allOrnamentsNumber = (height * (height + 1) / 2)
  let allOrnaments = ornaments.padEnd(allOrnamentsNumber, ornaments)

  let tree: string = ''
  let counter = 0
  for (let i = 0; i < height; i++) {
    let line: string = ''
    for (let j = 0; j <= i; j++) {
      line = line.concat(' ').concat(`${allOrnaments[counter]}`)
      counter++
    }
    line = line.concat('\n').padStart(height + i + 2).substring(1)
    tree = tree.concat(line)
  }
  return tree.concat('|'.padStart(height)).concat('\n')
}
