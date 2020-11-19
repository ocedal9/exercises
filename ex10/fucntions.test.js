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
  test('t', () => {
    const tree = 't'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(a,(b)', () => {
    const tree = '(a,(b)'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(R,(t),,,,)', () => {
    const tree = '(R,(t),,,,)'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(0,(R,(C))', () => {
    const tree = '(0,(R,(C))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(0,((R,(C),),))', () => {
    const tree = '(0,((R,(C),),))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(0,(R,(C),,),)', () => {
    const tree = '(0,(R,(C),,),)'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(R,(t),(r),)', () => {
    const tree = '(R,(t),(r),)'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(a,b)', () => {
    const tree = '(a,b)'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})
describe('Error', () => {
  test('(A,((B)),)', () => {
    const tree = '(A,((B)),)'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(0,(R,(C),),(T),)', () => {
    const tree = '(0,(R,(C),),(T),)'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(0,(R,(R,(R,(R,(R),(X))', () => {
    const tree = '(0,(R,(R,(R,(R,(R),(X))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})
describe('Error', () => {
  test('(A,(B,,),((,(D,(F,(I),(J,(K),))),(G)),(E,(H))))', () => {
    const tree = '(A,(B,,),((,(D,(F,(I),(J,(K),))),(G)),(E,(H))))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(A,(B,,),(),(D,(F,(I),(J,(K),))),(G)),(E,(H))))', () => {
    const tree = '(A,(B,,),(),(D,(F,(I),(J,(K),))),(G)),(E,(H))))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(A,(B,,),(%,(D,(F,(I),(J,(K),))),(G)),(E,(H))))', () => {
    const tree = '(A,(B,,),(%,(D,(F,(I),(J,(K),))),(G)),(E,(H))))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Error', () => {
  test('(A),(B,,),(C,(D,(F,(I),(J,(K),))),(G)),(E,(H))))', () => {
    const tree = '(A),(B,,),(C,(D,(F,(I),(J,(K),))),(G)),(E,(H))))'
    function result() {
      printTree(tree, 'postfix')
    }
    expect(result).toThrowError('Wrong')
  })
})

describe('Valid Syntax', () => {
  test('(A1)', () => {
    const tree = '(A1)'
    const result = printTree(tree)
    expect(result).toEqual(['A1'])
  })
})

describe('Valid Syntax', () => {
  test('(AA,)', () => {
    const tree = '(AA,)'
    const result = printTree(tree)
    expect(result).toEqual(['AA'])
  })
})

describe('Valid Syntax', () => {
  test('(A,(B))', () => {
    const tree = '(A,(B))'
    const result = printTree(tree)
    expect(result).toEqual(['B', 'A'])
  })
})
describe('Valid Syntax', () => {
  test('(A,(B),)', () => {
    const tree = '(A,(B),)'
    const result = printTree(tree)
    expect(result).toEqual(['B', 'A'])
  })
})
describe('Valid Syntax', () => {
  test('(A,,(C))', () => {
    const tree = '(A,,(C))'
    const result = printTree(tree)
    expect(result).toEqual(['A', 'C'])
  })
})
describe('Valid Syntax', () => {
  test('(A,(B),(C))', () => {
    const tree = '(A,(B),(C))'
    const result = printTree(tree)
    expect(result).toEqual(['B', 'A', 'C'])
  })
})
describe('Valid Syntax', () => {
  test('(0,(R,(C)))', () => {
    const tree = '(0,(R,(C)))'
    const result = printTree(tree)
    expect(result).toEqual(['C', 'R', '0'])
  })
})
describe('Valid Syntax', () => {
  test('(0,,(C,))', () => {
    const tree = '(0,,(C,))'
    const result = printTree(tree)
    expect(result).toEqual(['0', 'C'])
  })
})
describe('Valid Syntax', () => {
  test('(0,(R,(C),))', () => {
    const tree = '(0,(R,(C),))'
    const result = printTree(tree)
    expect(result).toEqual(['C', 'R', '0'])
  })
})

describe('Valid Syntax', () => {
  test('(0,(R,(C),),)', () => {
    const tree = '(0,(R,(C),),)'
    const result = printTree(tree)
    expect(result).toEqual(['C', 'R', '0'])
  })
})
describe('Valid Syntax', () => {
  test('(0,(R,(C),),(T))', () => {
    const tree = '(0,(R,(C),),(T))'
    const result = printTree(tree)
    expect(result).toEqual(['C', 'R', '0', 'T'])
  })
})
