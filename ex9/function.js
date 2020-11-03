function flattenRecursive(input) {
  var flattened = []
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      flattened.push(...flattenRecursive(input[i]))
    } else {
      flattened.push(input[i])
    }
  }
  return flattened
}

function flattenIterative(input) {
  for (var i = 0; i < input.length; i++)
    if (Array.isArray(input[i])) {
      input.splice(i, 1, ...input[i])
      i--
    }
  return input
}

module.exports = { flattenRecursive, flattenIterative }
