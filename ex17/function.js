function isPal(ll) {
  let stack = []
  let currNode = ll.head
  while (currNode) {
    stack.push(currNode)
    currNode = currNode.next
  }
  let pointer = ll.head
  while (pointer) {
    let elem = stack.pop()
    if (elem.data !== pointer.data) return false
    pointer = pointer.next
  }
  return true
}
module.exports = isPal
