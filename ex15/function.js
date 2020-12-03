function sumBalance(input) {
  let left = 0
  let right = input.length - 1
  let leftSum = input[left]
  let rightSum = input[right]
  while (left < right - 1) {
    leftSum <= rightSum
      ? (leftSum += input[++left])
      : (rightSum += input[--right])
  }
  return leftSum !== rightSum || input.length < 2 ? -1 : left
}
module.exports = sumBalance
