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
    // rl.write('\x1B[?25l')
    // process.stdout.write('\x1B[?25l')
    rl.write('\x1b[44m\x1b[37m[')
    for (let k = 0; k < 50; k++) {
      rl.write('\u2591')
    }

    // rl.write(`\u0020] ${por}%\x1b[0m`)
    let por = 0
    rl.write(`]`)
    const arr = []
    let i = 2
    let spaces = 50 / input
    let accPer = 0
    let filledBars = 0
    let barsToFill = 0
    let accPerArr = []
    let perArr = []
    let barsToFillArr = []
    let filledBarsArr = []
    let dNumArr = []
    while (arr.length < input) {
      if (isPrime(i)) {
        arr.push(i)
        accPer += spaces
        accPerArr.push(accPer)
        let per = Math.floor(accPer * 2)
        perArr.push(per)
        filledBarsArr.push(filledBars)
        barsToFill = Math.floor(accPer - filledBars)
        barsToFillArr.push(barsToFill)
        rl.write(`${per}%`)
        let dNum = 51 - filledBars
        if (barsToFill > 0) {
          readline.moveCursor(process.stdout, -per.toString().length - 1 - dNum)
          for (let y = 0; y < barsToFill; y++) {
            if (filledBars < 51) {
              rl.write('\u2588')
              filledBars++
            }
          }
          dNum = 51 - filledBars
          dNumArr.push(dNum)
          readline.moveCursor(process.stdout, dNum)
        } else {
          readline.moveCursor(process.stdout, -per.toString().length - 1)
        }
      }
      i++
    }
    // rl.write(`\nThe first ${input} prime numbers are : ${arr}`)
    rl.write('\x1b[0m\n')
    // console.log(accPerArr, filledBarsArr, barsToFillArr, perArr)
    // console.log(dNumArr)
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
function getN() {
  rl.question(
    'How many prime numbers do you want to compute?\u0020',
    (input) => {
      const createBar = new Bar()
      createBar.start(input)
    }
  )
}
getN()
