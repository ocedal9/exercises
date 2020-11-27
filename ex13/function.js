function isSameLevel(tree, n1, n2) {
  let Q = []
  Q.push(...tree.children)
  while (Q) {
    let n1Found = false
    let n2Found = false
    let newQ = []
    for (let node of Q) {
      if (n1 === n2) {
        if (node.value === n1) n1Found ? (n2Found = true) : (n1Found = true)
      } else {
        if (node.value === n1) n1Found = true
        if (node.value === n2) n2Found = true
      }
      if (n1Found && n2Found) return true
      else for (let child of node.children) newQ.push(child)
    }
    if (newQ.length > 0) Q = newQ
    else return false
  }
}
module.exports = isSameLevel
