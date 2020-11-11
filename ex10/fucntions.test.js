const { TestScheduler } = require('jest')
const { printTree, tree } = require('./function')

const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))'
const tree1 = new tree()
tree1.add(bTree)

describe('proposed tree', () => {
  test('infix order', () => {
    const result = printTree(tree1)
    expect(result).toEqual(['D', 'B', 'E', 'A', 'H', 'F', 'I', 'C', 'G', 'J'])
  })
})

describe('proposed tree', () => {
  test('prefix order', () => {
    const result = printTree(tree1, 'prefix')
    expect(result).toEqual(['A', 'B', 'D', 'E', 'C', 'F', 'H', 'I', 'G', 'J'])
  })
})

describe('proposed tree', () => {
  test('postfix order', () => {
    const result = printTree(tree1, 'postfix')
    expect(result).toEqual(['D', 'E', 'B', 'H', 'I', 'F', 'J', 'G', 'C', 'A'])
  })
})

const bTree2 = '(Aaa,(b,(D5gr),(Eeee)),(098776,(F,(nnbn),(I)),(G44,,(J))))'
const tree2 = new tree()
tree2.add(bTree2)

describe('different charactres', () => {
  test('infix order', () => {
    const result = printTree(tree2)
    expect(result).toEqual([
      'D5gr',
      'b',
      'Eeee',
      'Aaa',
      'nnbn',
      'F',
      'I',
      '098776',
      'G44',
      'J',
    ])
  })
})

describe('different charactres', () => {
  test('prefix order', () => {
    const result = printTree(tree2, 'prefix')
    expect(result).toEqual([
      'Aaa',
      'b',
      'D5gr',
      'Eeee',
      '098776',
      'F',
      'nnbn',
      'I',
      'G44',
      'J',
    ])
  })
})

describe('different charactres', () => {
  test('postfix order', () => {
    const result = printTree(tree2, 'postfix')
    expect(result).toEqual([
      'D5gr',
      'Eeee',
      'b',
      'nnbn',
      'I',
      'F',
      'J',
      'G44',
      '098776',
      'Aaa',
    ])
  })
})

const bTree3 = '(A,(B,,(D)),(C,(E,(G,(K),(L,((M),(N)))),(H)),(F,(I),(J))))'

const tree3 = new tree()
tree3.add(bTree3)

describe('different tree', () => {
  test('infix order', () => {
    const result = printTree(tree3)
    expect(result).toEqual([
      'B',
      'D',
      'A',
      'K',
      'G',
      'M',
      'L',
      'N',
      'E',
      'H',
      'C',
      'I',
      'F',
      'J',
    ])
  })
})

describe('different tree', () => {
  test('prefix order', () => {
    const result = printTree(tree3, 'prefix')
    expect(result).toEqual([
      'A',
      'B',
      'D',
      'C',
      'E',
      'G',
      'K',
      'L',
      'M',
      'N',
      'H',
      'F',
      'I',
      'J',
    ])
  })
})

describe('different tree', () => {
  test('postfix order', () => {
    const result = printTree(tree3, 'postfix')
    expect(result).toEqual([
      'D',
      'B',
      'K',
      'M',
      'N',
      'L',
      'G',
      'H',
      'E',
      'I',
      'J',
      'F',
      'C',
      'A',
    ])
  })
})
