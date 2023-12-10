console.log(createChristmasTree('abc', 5))

function createChristmasTree(ornaments: string, height: number) {
  let tree: string = ''
  let allOrnamentsNumber = (height * (height + 1) / 2)
  let allOrnaments = ornaments.padEnd(allOrnamentsNumber, ornaments)

  let previousLimit = 0
  for (let i = 0; i <= height; i++) {
    let line = allOrnaments.substring(previousLimit, (i * (i + 1)) / 2) + '\n'
    line = line.split('').map(e => e+' ').join('')
    line = line.padStart(height + i + 2)
    tree = tree.concat(line)
    previousLimit = (i * (i + 1)) / 2
  }
  // tree = tree.split('').map(o => ` ${o}`).join('')
  // tree = tree.split('').map(e => e+' ').join('')

  // for (let i = 0; i < height; i++) {
  //   let line: string = 'a '.repeat(i + 1).padStart(height + i +1) + '\n'
  //   tree = tree.concat(line)
  // }
  tree = tree.concat('|\n'.padStart(height + 1))
  console.log('tree 0', tree[0])
  return tree.substring(1)
}