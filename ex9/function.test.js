const { flattenRecursive, flattenIterative } = require('./function')
describe('Functional', () => {
  test('test case with proposed array', () => {
    const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]]
    const start = Date.now()
    const result = flattenRecursive(input)
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('Functional', () => {
  test('test case with nested array', () => {
    const input = [[[[[[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]]]]]]
    const start = Date.now()
    const result = flattenRecursive(input)
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('Functional', () => {
  test('test case with diferent value types', () => {
    const input = [
      null,
      undefined,
      3,
      ['string', {}, [true, [[7.84]], 8]],
      [9, 10],
    ]
    const start = Date.now()
    const result = flattenRecursive(input)
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual([
      null,
      undefined,
      3,
      'string',
      {},
      true,
      7.84,
      8,
      9,
      10,
    ])
  })
})

describe('Functional', () => {
  test('test case with simple array', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const start = Date.now()
    const result = flattenRecursive(input)
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('Iterative', () => {
  test('test case with proposed array', () => {
    const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]]
    const start = Date.now()
    const result = flattenIterative(input)
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('Iterative', () => {
  test('test case with nested array', () => {
    const input = [[[[[[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]]]]]]
    const start = Date.now()
    const result = flattenIterative(input)
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('Iterative', () => {
  test('test case with diferent value types', () => {
    const input = [
      null,
      undefined,
      3,
      ['string', {}, [true, [[7.84]], 8]],
      [9, 10],
    ]
    const start = Date.now()
    const result = flattenIterative(input)
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual([
      null,
      undefined,
      3,
      'string',
      {},
      true,
      7.84,
      8,
      9,
      10,
    ])
  })
})

describe('Iterative', () => {
  test('test case with simple array', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const start = Date.now()
    const result = flattenIterative(input)
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
