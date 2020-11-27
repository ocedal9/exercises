const isSameLevel = require('./function')
const Tree = require('./tree')
const tree = new Tree()
tree.add([
  0,
  [
    [1],
    [2, [[1], [5, [[3], [5, [[6]]], [9]]]]],
    [3, [[0]]],
    [5],
    [7, [[3, [[3], [0, [[9], [4]]]]]]],
  ],
])
describe('Success', () => {
  test('1 & 3, 1st level', () => {
    const result = isSameLevel(tree.root, 1, 3)
    expect(result).toBe(true)
  })
})
describe('Success', () => {
  test('7 & 2, 1st level', () => {
    const result = isSameLevel(tree.root, 7, 2)
    expect(result).toBe(true)
  })
})
describe('Success', () => {
  test('4 & 9, 4th level', () => {
    const result = isSameLevel(tree.root, 4, 9)
    expect(result).toBe(true)
  })
})
describe('Success', () => {
  test('3 & 3, 3rd level', () => {
    const result = isSameLevel(tree.root, 3, 3)
    expect(result).toBe(true)
  })
})
describe('fail', () => {
  test('l & 1', () => {
    const result = isSameLevel(tree.root, 1, 1)
    expect(result).toBe(false)
  })
})
describe('fail', () => {
  test('0 & 2', () => {
    const result = isSameLevel(tree.root, 0, 2)
    expect(result).toBe(false)
  })
})
describe('fail', () => {
  test('l2 & 1', () => {
    const result = isSameLevel(tree.root, 12, 1)
    expect(result).toBe(false)
  })
})
describe('fail', () => {
  test('a & b', () => {
    const result = isSameLevel(tree.root, 'a', 'b')
    expect(result).toBe(false)
  })
})
describe('fail', () => {
  test('9', () => {
    const result = isSameLevel(tree.root, 9)
    expect(result).toBe(false)
  })
})
