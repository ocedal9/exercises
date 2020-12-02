function getArea(matrix) {
  var max = 0
  var value = []
  var accRow = 0
  var accCol = 0
  for (var i = 0; i < matrix.length; i++) {
    let stack = []
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        value[j] = i === 0 ? 1 : value[j] + 1
      } else {
        value[j] = 0
      }
      while (stack.length && value[j] <= value[stack[stack.length - 1]]) {
        accRow = value[stack.pop()]
        accCol = stack.length === 0 ? j : j - stack[stack.length - 1] - 1
        max = Math.max(max, accRow * accCol)
      }
      stack.push(j)
    }
    while (stack.length) {
      accRow = value[stack.pop()]
      accCol =
        stack.length === 0
          ? matrix[0].length
          : matrix[0].length - stack[stack.length - 1] - 1
      max = Math.max(max, accRow * accCol)
    }
  }

  return max
}

module.exports = getArea
