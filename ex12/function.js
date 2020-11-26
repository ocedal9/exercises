function traverseLeft(left) {
  const result = new Array()
  function recursion(node) {
    node.left && recursion(node.left)
    result.push(node.data)
    node.right && recursion(node.right)
  }
  recursion(left)
  return result
}
function traverseRight(right) {
  const result = new Array()
  function recursion(node) {
    node.right && recursion(node.right)
    result.push(node.data)
    node.left && recursion(node.left)
  }
  recursion(right)
  return result
}
function isSym(tree) {
  if (tree.root.left && tree.root.right) {
    const leftSon = traverseLeft(tree.root.left)
    const rightSon = traverseRight(tree.root.right)
    if (leftSon.length === rightSon.length) {
      for (let i = 0; i < leftSon.length; i++) {
        if (leftSon[i] != rightSon[i]) return 'IS NOT SYMMETRIC'
      }
      return 'SYMMETRIC'
    } else {
      return 'IS NOT SYMMETRIC'
    }
  } else {
    return 'SYMMETRIC'
  }
}
module.exports = isSym
