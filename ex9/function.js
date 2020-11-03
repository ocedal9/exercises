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
  var array = []
  while (input.length) {
    var value = input.shift()
    if (Array.isArray(value)) {
      input = value.concat(input)
    } else {
      array.push(value)
    }
  }
  return array
}

module.exports = { flattenRecursive, flattenIterative }
