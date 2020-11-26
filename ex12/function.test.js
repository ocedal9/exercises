const Tree = require('./tree')
const isSym = require('./function')

describe('SYMMETRIC', () => {
  test('Proposed Tree', () => {
    const tree = new Tree()
    tree.add([1, [2, [3], [4, [5], []]], [2, [4, [], [5]], [3]]])
    const result = isSym(tree)
    expect(result).toEqual('SYMMETRIC')
  })
})

describe('SYMMETRIC', () => {
  test('Empty Tree', () => {
    const tree2 = new Tree()
    tree2.add([])
    const result = isSym(tree2)
    expect(result).toEqual('SYMMETRIC')
  })
})

describe('SYMMETRIC', () => {
  test('Just Root', () => {
    const tree = new Tree()
    tree.add([1])
    const result = isSym(tree)
    expect(result).toEqual('SYMMETRIC')
  })
})

describe('NOT SYMMETRIC', () => {
  test('diferent left branch size', () => {
    const tree = new Tree()
    tree.add([1, [2, [3], [4, [5], []]], [2, [4, [], [5]], []]])
    const result = isSym(tree)
    expect(result).toEqual('IS NOT SYMMETRIC')
  })
})

describe('NOT SYMMETRIC', () => {
  test('diferent values', () => {
    const tree = new Tree()
    tree.add([1, [2, [3], [4, [5], []]], [2, [4, [], [5]], [6]]])
    const result = isSym(tree)
    expect(result).toEqual('IS NOT SYMMETRIC')
  })
})
