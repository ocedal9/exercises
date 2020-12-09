let isPal = require('./function')
let LinkedList = require('../ex16/linkedList')

describe('is Palindrome', () => {
  test('1,2,2,3,3,2,2,1', () => {
    const ll = new LinkedList()
    ll.insertHead(1)
    ll.insertLast(2)
    ll.insertLast(2)
    ll.insertLast(3)
    ll.insertLast(3)
    ll.insertLast(2)
    ll.insertLast(2)
    ll.insertLast(1)
    const result = isPal(ll)
    expect(result).toBe(true)
  })
})

describe('is Palindrome', () => {
  test('a,b,a', () => {
    const ll = new LinkedList()
    ll.insertHead('a')
    ll.insertLast('b')
    ll.insertLast('a')
    const result = isPal(ll)
    expect(result).toBe(true)
  })
})

describe('is Palindrome', () => {
  test('a', () => {
    const ll = new LinkedList()
    ll.insertHead('a')
    const result = isPal(ll)
    expect(result).toBe(true)
  })
})

describe('is NOT Palindrome', () => {
  test('11,2,2,3,3,2,2,1', () => {
    const ll = new LinkedList()
    ll.insertHead(11)
    ll.insertLast(2)
    ll.insertLast(2)
    ll.insertLast(3)
    ll.insertLast(3)
    ll.insertLast(2)
    ll.insertLast(2)
    ll.insertLast(1)
    const result = isPal(ll)
    expect(result).toBe(false)
  })
})

describe('is NOT Palindrome', () => {
  test('a,b,c', () => {
    const ll = new LinkedList()
    ll.insertHead('a')
    ll.insertLast('b')
    ll.insertLast('c')
    const result = isPal(ll)
    expect(result).toBe(false)
  })
})

describe('is NOT Palindrome', () => {
  test('empty', () => {
    const ll = new LinkedList()
    const result = isPal(ll)
    expect(result).toBe(false)
  })
})
