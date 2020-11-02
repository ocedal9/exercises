function reverseBlocks(arr, blockSize) {
  let completeBlocks = Math.trunc(arr.length / blockSize)
  let lastBlockSize = arr.length - (completeBlocks * blockSize)
  let size = blockSize
  let blockTurn = 0

  while (blockTurn < completeBlocks) {
    let leftElement = blockTurn++ * blockSize
    let rigthElement = leftElement + size - 1
    while (leftElement < rigthElement) {
      let leftTemp = arr[leftElement]
      arr[leftElement++] = arr[rigthElement]
      arr[rigthElement--] = leftTemp
    }
    if (blockTurn == completeBlocks && lastBlockSize > 1) {
      completeBlocks++
      size = lastBlockSize
      lastBlockSize = 0
    }
  }

  return arr
}
module.exports = reverseBlocks