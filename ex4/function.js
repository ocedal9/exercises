function mergeArrays(largeArray, smallArray) {
  let largeInTurn = largeArray.length - smallArray.length - 1
  let smallInTurn = smallArray.length - 1
  let finalInTurn = largeArray.length - 1

  while (largeInTurn >= 0 && smallInTurn >= 0) {
    if (largeArray[largeInTurn] > smallArray[smallInTurn]) {
      largeArray[finalInTurn--] = largeArray[largeInTurn--]
    }
    else if (largeArray[largeInTurn] < smallArray[smallInTurn]) {
      largeArray[finalInTurn--] = smallArray[smallInTurn--]
    }
    else {
      largeArray[finalInTurn--] = smallArray[smallInTurn--]
      largeArray[finalInTurn--] = largeArray[largeInTurn--]
    }
  }

  if (largeInTurn >= 0) {
    while (finalInTurn >= 0) {
      largeArray[finalInTurn--] = largeArray[largeInTurn--]
    }
  } else {
    while (finalInTurn >= 0) {
      largeArray[finalInTurn--] = smallArray[smallInTurn--]
    }
  }
  return largeArray
}
module.exports = mergeArrays