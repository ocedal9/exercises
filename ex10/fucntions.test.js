const { printTree } = require('./function')

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

const tree3 = '(A,(B,(D),(E,(H),(I))),(C,(F,(J),(K)),(G,,(L))))'

describe('different Tree', () => {
  test('infix order', () => {
    const result = printTree(tree3)
    expect(result).toEqual([
      'D',
      'B',
      'H',
      'E',
      'I',
      'A',
      'J',
      'F',
      'K',
      'C',
      'G',
      'L',
    ])
  })
})

describe('different Tree', () => {
  test('prefix order', () => {
    const result = printTree(tree3, 'prefix')
    expect(result).toEqual([
      'A',
      'B',
      'D',
      'E',
      'H',
      'I',
      'C',
      'F',
      'J',
      'K',
      'G',
      'L',
    ])
  })
})

describe('different Tree', () => {
  test('postfix order', () => {
    const result = printTree(tree3, 'postfix')
    expect(result).toEqual([
      'D',
      'H',
      'I',
      'E',
      'B',
      'J',
      'K',
      'F',
      'L',
      'G',
      'C',
      'A',
    ])
  })
})

describe('Error', () => {
  test('"(" as data Error', () => {
    const tree = '(A,(B,,),((,(D,(F,(I),(J,(K),))),(G)),(E,(H))))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('")" as data Error', () => {
    const tree = '(A,(B,,),(),(D,(F,(I),(J,(K),))),(G)),(E,(H))))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('not alphanumeric as data Error', () => {
    const tree = '(A,(B,,),(%,(D,(F,(I),(J,(K),))),(G)),(E,(H))))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('input not inside () Error', () => {
    const tree = 't'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('Syntax Error', () => {
    const tree = '(R,(t),,,,)'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('Two right sons Error', () => {
    const tree = '(R,(t),(r),)'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('Wrong Distribution', () => {
    const tree = '(A,(B),,),(C,(D,(F,(I),(J,(K),))),(G)),(E,(H))))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('Wrong root data', () => {
    const tree = '(A),(B,,),(C,(D,(F,(I),(J,(K),))),(G)),(E,(H))))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('expression must start whith "(" or ""', () => {
    const tree = '(a,b)'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})
