const sumBalance = require('./function.js')

describe('not balaced', () => {
  test('input = []', () => {
    const input = []
    const result = sumBalance(input)
    expect(result).toBe(-1)
  })
})

describe('not balaced', () => {
  test('input = [1]', () => {
    const input = [1]
    const result = sumBalance(input)
    expect(result).toBe(-1)
  })
})

describe('not balaced', () => {
  test('input = [2, 4, 6, 8, 6, 4, 2]', () => {
    const input = [2, 4, 6, 8, 6, 4, 2]
    const result = sumBalance(input)
    expect(result).toBe(-1)
  })
})

describe('Balaced', () => {
  test('input = [1, 1] ---> (0 expected)', () => {
    const input = [1, 1]
    const result = sumBalance(input)
    expect(result).toBe(0)
  })
})

describe('Balaced', () => {
  test('input = [1, 2, 3] ---> (1 expected)', () => {
    const input = [1, 2, 3]
    const result = sumBalance(input)
    expect(result).toBe(1)
  })
})

describe('Balaced', () => {
  test('input = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13] ---> (6 expected)', () => {
    const input = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13]
    const result = sumBalance(input)
    expect(result).toBe(6)
  })
})

describe('Balaced', () => {
  test('input = [4, 11, 16, 22, 1, 5, 8, 7, 3, 4, 9, 4, 3, 6, 4, 1] ---> (4 expected)', () => {
    const input = [4, 11, 16, 22, 1, 5, 8, 7, 3, 4, 9, 4, 3, 6, 4, 1]
    const result = sumBalance(input)
    expect(result).toBe(4)
  })
})
