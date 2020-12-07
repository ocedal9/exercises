function hasLoop(ll) {
  let slow = ll.head.next
  let fast = ll.head.next.next
  while (slow !== fast && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  slow = ll.head
  while (slow != fast && fast && fast.next) {
    slow = slow.next
    fast = fast.next
  }
  return slow === fast ? slow : false
}
module.exports = hasLoop
