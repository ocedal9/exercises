class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}
class Tree {
  constructor() {
    this.root = null
  }
  valChar(char) {
    return /[a-z0-9]/i.test(char)
  }
  valData(exp) {
    let data = ''
    if (exp[0] != '(' || exp.length <= 1) {
      throw new Error('Wrong Syntax')
    }
    for (let char of exp.slice(1)) {
      if (this.valChar(char)) {
        data = data.concat(char)
      } else {
        throw new Error('Wrong Syntax')
      }
    }
    return data
  }
  parCount(exp) {
    let sum = 0
    for (let char of exp) {
      if (char == '(') {
        sum++
      } else if (char == ')') {
        sum--
      }
    }
    return sum
  }
  add(str, wnode = null) {
    if (str[0] != '(' || !str.endsWith(')')) {
      throw new Error('Wrong Syntax')
    }
    let expArr = str.split(',')
    let nodeData = ''
    let leftData = ''
    let rightData = ''
    let leftDone = false
    let onlyLeft = false
    if (expArr.length == 1) {
      let exp = expArr[0]
      if (exp.endsWith(')')) {
        let expMom = exp.slice(0, exp.length - 1)
        nodeData = this.valData(expMom)
      }
    } else if (expArr.length == 2) {
      nodeData = this.valData(expArr[0])
      if (expArr[1][0] == '(' && expArr[1].endsWith(')')) {
        let expMom = expArr[1].slice(0, expArr[1].length - 1)
        leftData = expMom
      } else if (
        (expArr[1].length == 1 && expArr[1][0] != ')') ||
        (expArr[1].length > 1 &&
          (expArr[1][0] != '(' || expArr[1].endswith(')')))
      ) {
        throw new Error('Wrong Syntax')
      }
    } else if (expArr.length > 2) {
      nodeData = this.valData(expArr[0])
      let parAcu = 0
      let leftArr = []
      let rightArr = []
      for (let i = 1; i < expArr.length; i++) {
        let exp = expArr[i]
        let parSum = this.parCount(exp)
        parAcu += parSum
        if (i == expArr.length - 1 && parAcu == -1) {
          exp = exp.slice(0, exp.length - 1)
          leftDone = true
          onlyLeft = true
        }
        leftArr.push(exp)
        if (parAcu == 0) {
          leftDone = true
          break
        }
      }
      if (!leftDone) {
        throw new Error('Wrong Syntax')
      }
      leftData = leftArr.join(',')
      if (!onlyLeft) {
        rightArr = expArr.slice(i + 1)
        let rightDataMom = rightArr.join(',')
        rightData = rightDataMom.slice(0, rightDataMom.length - 1)
      }
    }
    if (this.root == null) {
      wnode = new Node(nodeData)
      this.root = wnode
    }
    wnode.data = nodeData
    if (leftData) {
      wnode.left = new Node()
      this.add(leftData, wnode.left)
    }
    if (rightData) {
      wnode.right = new Node()
      this.add(rightData, wnode.right)
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
