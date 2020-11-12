class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class Tree {
  constructor() {
    this.root
  }
  add(str) {
    const expArr = str.split(',')
    const stack = []
    for (let i = 0; i < expArr.length; i++) {
      const currStack = stack[stack.length - 1]
      let exp = expArr[i]
      let closePar = 0
      let data = ''
      if (exp) {
        for (let p = 0; p < exp.length; p++) {
          let char = exp[p]
          let regex = /[a-z0-9]/i
          let alpha = regex.test(char)
          if (alpha) {
            data = data.concat(char)
          } else if (char === ')') {
            closePar++
          } else if (!alpha && char != '(' && char != ')') {
            throw Error('Wrong Input String')
          }
        }
        let node = {}
        if (i === 0) {
          node = new Node(data)
          this.root = node
          stack.push(node)
        } else if (closePar === 0) {
          node = new Node(data)
          if (currStack.left !== null) {
            currStack.right = node
          } else {
            currStack.left = node
          }
          stack.push(node)
        } else if (closePar === exp.length && exp.length % 2 == 1) {
          let pop = (closePar + 1) / 2
          for (pop; pop > 0; pop--) {
            stack.pop()
          }
        } else if (closePar === 1) {
          if (closePar === exp.length) {
            stack.pop()
          } else {
            node = new Node(data)
            currStack.left = node
          }
        } else if (closePar >= 2) {
          if (expArr[i - 1].endsWith(')') || expArr[i - 1].length == 0) {
            let pop = closePar / 2
            node = new Node(data)
            currStack.right = node
            for (pop; pop > 0; pop--) {
              stack.pop()
            }
          } else {
            node = new Node(data)
            currStack.left = node
            stack.pop()
          }
        }
      }
    }
  }
  infix() {
    var result = new Array()
    const infixRecursion = function (node) {
      node.left && infixRecursion(node.left)
      result.push(node.data)
      node.right && infixRecursion(node.right)
    }
    infixRecursion(this.root)
    return result
  }
  prefix() {
    var result = new Array()
    const prefixRecursion = function (node) {
      result.push(node.data)
      node.left && prefixRecursion(node.left)
      node.right && prefixRecursion(node.right)
    }
    prefixRecursion(this.root)
    return result
  }
  postfix() {
    var result = new Array()
    const postfixRecursion = function (node) {
      node.left && postfixRecursion(node.left)
      node.right && postfixRecursion(node.right)
      result.push(node.data)
    }
    postfixRecursion(this.root)
    return result
  }
}

function printTree(tree, order = 'infix') {
  const myTree = new Tree()
  myTree.add(tree)
  if (order == 'infix') {
    return myTree.infix()
  } else if (order == 'prefix') {
    return myTree.prefix()
  } else if (order == 'postfix') {
    return myTree.postfix()
  }
}

module.exports = { printTree }

// const btree = '(A,(B,,),(C,(D,(F,(I),(J,(K),))),(G)),(E,(H))))'

// // const tree3 = new Tree()
// const tree1 = new Tree()
// tree1.add(btree)
// // console.log(tree1)
// console.log(tree1.infix())
