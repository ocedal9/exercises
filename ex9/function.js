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
  let stack = []
  let result = []
  let i = input.length - 1
  while (i >= 0) {
    stack.push(input[i--])
  }
  while (stack.length > 0) {
    const elem = stack.pop()
    if (Array.isArray(elem)) {
      let p = elem.length - 1
      while (p >= 0) {
        stack.push(elem[p--])
      }
    } else {
      result.push(elem)
    }
  }
  return result
}

module.exports = { flattenRecursive, flattenIterative }
