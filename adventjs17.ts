console.log(optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
])) // [[2, 8]]

console.log(optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
])) // [[1, 6], [8, 10]]

console.log(optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
])) // [[1, 2], [3, 4], [5, 6]]

console.log(optimizeIntervals([
  [1, 4],
  [4, 6],
  [8, 10],
  [9, 15],
  [10, 14],
]))

function optimizeIntervals(intervals: Array<Array<number>>) {
  console.log(intervals)
  intervals.sort((a, b) => a[0] - b[0])
  let result: Array<Array<number>> = []

  for (let i = 0; i < intervals.length; i++) {
    if (i === 0) {
      result.push(intervals[i])
      continue
    } else {
      let merged = mergeIntervals([result[result.length - 1], intervals[i]])
      // console.log('merged', merged)
      if (merged.length === 2) {
        result[result.length - 1] = merged[0]
        result.push(merged[1])
      } else {
        result[result.length - 1] = merged[0]
      }
    }
  }
  // console.log(result)
  // console.log('---')

  function mergeIntervals(intervals: Array<Array<number>>) {
    let mergedIntervals: Array<Array<number>> = []
    if (intervals[0][1] >= intervals[1][0]) {
      if (intervals[0][1] >= intervals[1][1]) {
        mergedIntervals.push([intervals[0][0], intervals[0][1]])
      } else {
        mergedIntervals.push([intervals[0][0], intervals[1][1]])
      }
    } else {
      mergedIntervals.push(intervals[0], intervals[1])
    }

    // console.log(mergedIntervals)
    return mergedIntervals
  }

  return result
}

