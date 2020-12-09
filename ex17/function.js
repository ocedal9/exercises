function isPal(ll) {
  let middle = ll.head
  let full = ll.head
  while (full) {
    middle = middle.next
    full = full?.next?.next
  }
  let secondHalf = null
  while (middle) {
    let temp = middle.next
    middle.next = secondHalf
    secondHalf = middle
    middle = temp
  }
  let firstHalf = ll.head
  while (secondHalf) {
    if (firstHalf.data !== secondHalf.data) return false
    firstHalf = firstHalf.next
    secondHalf = secondHalf?.next
  }
  return ll.head ? true : false
}
module.exports = isPal
