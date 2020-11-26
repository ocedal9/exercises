class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}
class Tree {
  constructor() {
    this.root = null
  }
  add(arr, node = null) {
    if (!node) {
      node = new Node(arr[0])
      this.root = node
    } else {
      node.data = arr[0]
    }
    if (arr[1] !== undefined && arr[1].length > 0) {
      node.left = new Node()
      this.add(arr[1], node.left)
    }
    if (arr[2] !== undefined && arr[2].length > 0) {
      node.right = new Node()
      this.add(arr[2], node.right)
    }
    return this.root
  }
}
module.exports = Tree
