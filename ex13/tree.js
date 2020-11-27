class Node {
  constructor(value) {
    this.value = value
    this.children = []
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
      node.value = arr[0]
    }
    if (arr[1]) {
      for (let i = 0; i < arr[1].length; i++) {
        node.children[i] = new Node()
        this.add(arr[1][i], node.children[i])
      }
    }
    return this.root
  }
}
module.exports = Tree
