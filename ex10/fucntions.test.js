const { printTree, Tree } = require('./function')

const tree1 = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))'

describe('proposed Tree', () => {
  test('infix order', () => {
    const result = printTree(tree1)
    expect(result).toEqual(['D', 'B', 'E', 'A', 'H', 'F', 'I', 'C', 'G', 'J'])
  })
})

describe('proposed Tree', () => {
  test('prefix order', () => {
    const result = printTree(tree1, 'prefix')
    expect(result).toEqual(['A', 'B', 'D', 'E', 'C', 'F', 'H', 'I', 'G', 'J'])
  })
})

describe('proposed Tree', () => {
  test('postfix order', () => {
    const result = printTree(tree1, 'postfix')
    expect(result).toEqual(['D', 'E', 'B', 'H', 'I', 'F', 'J', 'G', 'C', 'A'])
  })
})

const tree2 = '(Aaa,(b,(D5gr),(Eeee)),(098776,(F,(nnbn),(I)),(G44,,(J))))'

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

const tree3 = '(A,(B,,),(C,(D,(F,(I),(J,(K),))),(G)),(E,(H))))'

describe('different Tree', () => {
  test('infix order', () => {
    const result = printTree(tree3)
    expect(result).toEqual([
      'B',
      'A',
      'I',
      'F',
      'K',
      'J',
      'D',
      'G',
      'C',
      'H',
      'E',
    ])
  })
})

describe('different Tree', () => {
  test('prefix order', () => {
    const result = printTree(tree3, 'prefix')
    expect(result).toEqual([
      'A',
      'B',
      'C',
      'D',
      'F',
      'I',
      'J',
      'K',
      'G',
      'E',
      'H',
    ])
  })
})

describe('different Tree', () => {
  test('postfix order', () => {
    const result = printTree(tree3, 'postfix')
    expect(result).toEqual([
      'B',
      'I',
      'K',
      'J',
      'F',
      'G',
      'D',
      'H',
      'E',
      'C',
      'A',
    ])
  })
})
