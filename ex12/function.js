function isSym(tree) {
  let isArr = []
  function recursion(left, right) {
    if (
      left.data != right.data ||
      (left.left && !right.right) ||
      (!left.left && right.right) ||
      (left.right && !right.left) ||
      (!left.right && right.left)
    ) {
      isArr.push(false)
    } else {
      isArr.push(true)
      left.left && right.right && recursion(left.left, right.right)
      left.right && right.left && recursion(left.right, right.left)
    }
  }
  if (tree.root.left && tree.root.right) {
    recursion(tree.root.left, tree.root.right)
    for (elem of isArr) {
      if (!elem) {
        return 'IS NOT SYMMETRIC'
      }
    }
  }
  return 'SYMMETRIC'
}
module.exports = isSym
