function hasLoop(ll) {
  let slow = ll.head
  let fast = ll.head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      slow = ll.head
      while (slow != fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }
  return false
}
module.exports = hasLoop
