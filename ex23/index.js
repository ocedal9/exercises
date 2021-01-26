const Bar = require('./progressBar')
const prime = require('./isPrime')
function getN(argv2) {
  const bar = new Bar(50)
  bar.start()
  let arr = []
  let i = 2
  let per = 0
  while (arr.length < argv2) {
    if (prime(i)) {
      arr.push(i)
      per = (100 * arr.length) / argv2
      bar.update(per)
    }
    i++
  }
  bar.close()
  return arr
}
// getN(100)
module.exports = getN
