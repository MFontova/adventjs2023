optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
]) // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
]) // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
]) // [[1, 2], [3, 4], [5, 6]]

function optimizeIntervals(intervals: Array<Array<number>>) {
  intervals.sort((a, b) => a[0] - b[0])
  console.log(intervals)
  let result: Array<Array<number>> = []

  for (let i = 0; i < intervals.length; i++) {
    console.log(intervals[i + 1])
    // if (intervals[i][1] > intervals[i + 1][0] && intervals[i][1] > intervals[i + 1][1]) {
    //   result.push(intervals[0])
    // } else if (intervals[i][1] > intervals[i + 1][0] && intervals[i][1] < intervals[i + 1][1]) {
    //   result.push([intervals[i][0], intervals[i + 1][1]])
    // }
  }


  console.log(result)
  return result
}