function getLong(input) {
  let currFirst = 0
  let currLast = 0
  let maxFirst = 0
  let maxLast = 0
  let currPair = [input[0]]
  for (let i = 1; i < input.length; i++) {
    if (currPair.length < 2) {
      if (!currPair.includes(input[i])) {
        currPair.push(input[i])
      }
      currLast++
    } else {
      if (currPair.includes(input[i])) {
        currLast++
      } else {
        same = 0
        currPair.shift()
        currPair.push(input[i])
        currFirst = i - 1
        currLast = i
      }
    }
    if (currLast - currFirst > maxLast - maxFirst) {
      maxLast = currLast
      maxFirst = currFirst
    }
  }
  return input.slice(maxFirst, maxLast + 1)
}
module.exports = getLong
