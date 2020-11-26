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
