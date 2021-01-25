const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
class Bar {
  constructor() {
    this.cursor = 1
    this.timer = null
  }
  start(input) {
    process.stdout.write('\x1B[?25l\x1b[44m\x1b[37m[')
    for (let k = 0; k < 50; k++) {
      process.stdout.write('\u2591')
    }
    process.stdout.write(`]`)
    const arr = []
    let i = 2
    let spaces = 50 / input
    let accPer = 0
    let filledBars = 0
    let barsToFill = 0
    let per = 0
    while (arr.length < input) {
      if (isPrime(i)) {
        arr.push(i)
        accPer += spaces
        if (arr.length == input) {
          per = 100
        } else {
          per = Math.floor(accPer * 2)
        }
        barsToFill = accPer - filledBars
        process.stdout.write(`${per}%`)
        if (barsToFill > 0) {
          readline.moveCursor(
            process.stdout,
            -per.toString().length - 52 + filledBars
          )
          for (let y = 0; y < barsToFill; y++) {
            if (filledBars < 50) {
              process.stdout.write('\u2588')
              filledBars++
            }
          }
          readline.moveCursor(process.stdout, 51 - filledBars)
        } else {
          readline.moveCursor(process.stdout, -per.toString().length - 1)
        }
      }
      i++
    }
    process.stdout.write(
      `\nThe first ${input} prime numbers are: ${arr}\x1B[?25h\x1b[0m\n`
    )
    rl.close()
  }
}
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
function getN(argv2) {
  const createBar = new Bar()
  createBar.start(argv2)
}
// getN(process.argv[2])
module.exports = getN
