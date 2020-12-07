function hasLoop(ll) {
  let slow = ll.head.next
  let fast = ll.head.next.next
  while (fast.next && slow !== fast) {
    slow = slow.next
    fast = fast.next.next
  }
  if (!fast.next) return false
  slow = ll.head
  while (slow != fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
module.exports = hasLoop
