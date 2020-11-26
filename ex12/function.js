function isSym(tree) {
  let sym = true
  function recursion(left, right) {
    if (
      left.data != right.data ||
      (left.left && !right.right) ||
      (!left.left && right.right) ||
      (left.right && !right.left) ||
      (!left.right && right.left)
    ) {
      sym = false
    } else {
      left.left && right.right && recursion(left.left, right.right)
      left.right && right.left && recursion(left.right, right.left)
    }
  }
  if (tree.root.left && tree.root.right) {
    recursion(tree.root.left, tree.root.right)
  }
  return sym
}
module.exports = isSym

function isMirror(root) {
  function traverse(nodeL, nodeR) {
    if (!!nodeL ^ !!nodeR) return false
    if (nodeL == null) return true
    if (nodeL.value !== nodeR.value) return false
    return (
      traverse(nodeL.left, nodeR.right) && traverse(nodeL.right, nodeR.left)
    )
  }
  return traverse(root.left, root.right)
}
