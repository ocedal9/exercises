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
    if (str[0] !== '(' || !str.endsWith(')')) {
      throw new Error('Wrong Input, must be inside ()')
    }
    const expArr = str.split(',')
    const stack = []
    if (expArr.length == 1) {
      let elem = expArr[0]
      let dataSingle = ''
      for (let index = 1; index < elem.length - 1; index++) {
        let single = /[a-z0-9]/i
        let alph = single.test(elem)
        if (alph) {
          dataSingle = dataSingle.concat(elem[index])
        }
        let node = new Node(dataSingle)
        this.root = node
      }
      return
    } else {
      for (let i = 0; i < expArr.length; i++) {
        let exp = expArr[i]
        // console.log('exp', exp)
        if (i == 0 && expArr.length > 1 && exp.endsWith(')')) {
          throw new Error('Wrong root node syntax')
        } else if (i > 0 && stack.length == 0) {
          throw new Error('Bad distribution of nodes')
        }
        const currStack = stack[stack.length - 1]
        let closePar = 0
        let openPar = 0
        let data = ''
        let closer = false
        if (!exp && !expArr[i + 1]) {
          throw new Error('Wrong Syntax')
        } else if (exp) {
          for (let p = 0; p < exp.length; p++) {
            let char = exp[p]
            if (p == 0) {
              if (char != '(' && char != ')') {
                throw new Error('Expression should start with "("')
              } else if (char == ')') {
                closer = true
              }
            }
            let regex = /[a-z0-9]/i
            let alpha = regex.test(char)
            if (alpha) {
              if (closer) {
                throw new Error('Bad use of ")"')
              }
              data = data.concat(char)
            } else if (char === ')') {
              closePar++
            } else if (!alpha && char != '(' && char != ')') {
              const text = `Wrong Character '${char}', must be alphanumeric`
              throw new Error(text)
            } else if (char === '(') {
              if (closer) {
                throw new Error('Bad use of ")"')
              }
              openPar++
              if (openPar > 1) {
                throw new Error('"(" is not a valid data input')
              }
            }
          }
          if (openPar == 1 && openPar + closePar == exp.length) {
            throw new Error('")" is not a valid data input')
          } else if (
            closePar == 1 &&
            openPar == 1 &&
            expArr[i - 1].endsWith(')')
          ) {
            throw new Error('Two right sons not allowd')
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
