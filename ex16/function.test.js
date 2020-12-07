let hasLoop = require('./function')
let LinkedList = require('./linkedList')

describe('has loop', () => {
  test('proposed list)', () => {
    const ll = new LinkedList()
    ll.insertHead(1)
    ll.insertLast(2)
    ll.insertLast(2)
    ll.insertLast(3)
    ll.insertLast(3)
    ll.insertLast(6)
    ll.insertLast(7)
    ll.insertLast(2)
    ll.insertLast(1, ll.head.next.next.next)
    const result = hasLoop(ll)
    expect(result.data).toBe(3)
  })
})

describe('has loop', () => {
  test('2 nodes loop)', () => {
    const ll = new LinkedList()
    ll.insertHead(1)
    ll.insertLast(2)
    ll.insertLast(2)
    ll.insertLast(3)
    ll.insertLast(3)
    ll.insertLast(6)
    ll.insertLast(7)
    ll.insertLast(2)
    ll.insertLast(1, ll.head.next.next.next.next.next.next.next)
    const result = hasLoop(ll)
    expect(result.data).toBe(2)
  })
})

describe('has loop', () => {
  test('complete loop', () => {
    const ll = new LinkedList()
    ll.insertHead(1)
    ll.insertLast(2)
    ll.insertLast(2)
    ll.insertLast(3)
    ll.insertLast(3)
    ll.insertLast(6)
    ll.insertLast(7)
    ll.insertLast(2)
    ll.insertLast(1, ll.head)
    const result = hasLoop(ll)
    expect(result.data).toBe(1)
  })
})

describe('without loop', () => {
  test('No loop', () => {
    const ll = new LinkedList()
    ll.insertHead(1)
    ll.insertLast(2)
    ll.insertLast(2)
    ll.insertLast(3)
    ll.insertLast(3)
    ll.insertLast(6)
    ll.insertLast(7)
    ll.insertLast(2)
    ll.insertLast(1)
    const result = hasLoop(ll)
    expect(result).toBe(false)
  })
})

describe('without loop', () => {
  test('No loop, 2 nodes', () => {
    const ll = new LinkedList()
    ll.insertHead(1)
    ll.insertLast(2)
    const result = hasLoop(ll)
    expect(result).toBe(false)
  })
})

describe('without loop', () => {
  test('No loop, 1 nodes', () => {
    const ll = new LinkedList()
    ll.insertHead(1)
    const result = hasLoop(ll)
    expect(result).toBe(false)
  })
})
describe('without loop', () => {
  test('No loop, empty linked list', () => {
    const ll = new LinkedList()
    const result = hasLoop(ll)
    expect(result).toBe(false)
  })
})
