const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
class Bar {
  constructor(input) {
    this.length = input
    this.filledBars = 0
  }
  start() {
    rl.write('\x1B[?25l\x1b[44m\x1b[37m[')
    for (let k = 0; k < this.length; k++) {
      rl.write('\u2591')
    }
    rl.write(`]0%`)
    readline.moveCursor(rl, -this.length - 3)
  }
  update(per) {
    let mustBeFilled = (per * this.length) / 100
    let displayPer = Math.floor(per)
    let barsToFill = Math.floor(mustBeFilled - this.filledBars)
    if (barsToFill > 0) {
      for (let y = 0; y < barsToFill; y++) {
        rl.write('\u2588')
        this.filledBars++
      }
      readline.moveCursor(rl, this.length + 1 - this.filledBars)
      rl.write(`${displayPer}%`)
      readline.moveCursor(
        rl,
        -displayPer.toString().length - 2 - this.length + this.filledBars
      )
    }
    if (this.filledBars == this.length) {
      readline.moveCursor(rl, 5)
      rl.write(`\x1B[?25h\x1b[0m\n`)
    }
  }
  close() {
    rl.close()
  }
}
module.exports = Bar
