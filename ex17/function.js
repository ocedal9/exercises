function isPal(ll) {
  let half = ll.head
  let full = ll.head
  let stack = []
  while (full) {
    if (full.next) stack.push(half.data)
    half = half.next
    full = full?.next?.next
  }
  while (stack.length > 0) {
    const elem = stack.pop()
    if (half.data !== elem) return false
    half = half.next
  }
  return ll.head ? true : false
}
module.exports = isPal
