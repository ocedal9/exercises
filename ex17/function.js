function isPal(ll) {
  let stack = []
  let currNode = ll.head
  while (currNode) {
    stack.push(currNode.data)
    currNode = currNode.next
  }
  let pointer = ll.head
  while (pointer) {
    let elem = stack.pop()
    if (elem !== pointer.data) return false
    pointer = pointer.next
  }
  return true
}
module.exports = isPal
