function isPal(ll) {
  let half = ll.head
  let full = ll.head
  while (full) {
    half = half.next
    full = full?.next?.next
  }
  let stack = []
  while (half) {
    stack.push(half.data)
    half = half.next
  }
  let currNode = ll.head
  while (stack.length > 0) {
    const elem = stack.pop()
    if (currNode.data !== elem) return false
    currNode = currNode.next
  }
  return ll.head ? true : false
}
module.exports = isPal
