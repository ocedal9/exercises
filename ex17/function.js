function isPal(ll) {
  let half = ll.head
  let full = ll.head
  while (full) {
    half = half.next
    full = full?.next?.next
  }
  let secondHalf = null
  while (half) {
    let temp = half.next
    half.next = secondHalf
    secondHalf = half
    half = temp
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
