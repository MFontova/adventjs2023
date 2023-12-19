// class TreeNode {
//   left: TreeNode | null
//   right: TreeNode | null
//   value: number | null

//   constructor(data: number) {
//     this.left = null;
//     this.right = null;
//     this.value = data;
//   }
// }

function transformTree(tree: Array<number | null>) {
  let result = insertNode(tree, 0)
  return result

  function insertNode(arr: Array<number | null>, i: number) {
    type TreeNode = {
      value: number,
      left: TreeNode | null,
      right: TreeNode | null
    }

    if (i >= arr.length || arr[i] === null) {
      return null
    }

    let root: TreeNode = {
      value: arr[i]!,
      left: insertNode(arr, 2 * i + 1),
      right: insertNode(arr, 2 * i + 2),
    }

    return root
  }
}


// const test = [0, 1, 2, 3, 4, 5, 6]
const test = [17, 0, null, null, 1]
// const test = [3, 1, 0, 8, 12, null, 1]

console.log(transformTree(test))