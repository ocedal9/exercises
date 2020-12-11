const set = require('./function')

describe('success', () => {
  test('empty object', () => {
    let obj = {}
    const result = set(obj, 'path.to.deeply.nested.property', 42)
    expect(result.path.to.deeply.nested.property).toBe(42)
  })
})

describe('success', () => {
  test('object with array', () => {
    let obj = { path: [] }
    const result = set(obj, 'path.to.deeply.nested.property', 42)
    expect(result.path.to.deeply.nested.property).toBe(42)
  })
})

describe('success', () => {
  test('object with existing property', () => {
    let obj = { path: {} }
    const result = set(obj, 'path.to.deeply.nested.property', 42)
    expect(result.path.to.deeply.nested.property).toBe(42)
  })
})

describe('success', () => {
  test('object with method', () => {
    let obj = { path() {} }
    const result = set(obj, 'path.to.deeply.nested.property', 42)
    expect(result.path.to.deeply.nested.property).toBe(42)
  })
})

describe('success', () => {
  test('object with different and extra properties', () => {
    let obj = { path: { to: { a: 'b', c: 'd' } } }
    const result = set(obj, 'path.to.deeply.nested.property', 42)
    expect(result.path.to.deeply.nested.property).toBe(42)
  })
})

describe('success', () => {
  test('object with nested array and properties', () => {
    const arr = [1, 2]
    arr.deeply = {}
    let obj = { path: { to: arr } }
    const result = set(obj, 'path.to.deeply.nested.property', 42)
    expect(result.path.to.deeply.nested.property).toBe(42)
  })
})

describe('success', () => {
  test('object value exists, and overwrite', () => {
    const arr = [1, 2]
    arr.deeply = {}
    let obj = { path: { to: 80 } }
    const result = set(obj, 'path.to', 42)
    expect(result.path.to).toBe(42)
  })
})

describe('fail', () => {
  test('no mutable property', () => {
    let obj = { path: 1 }
    function result() {
      set(obj, 'path.to.deeply.nested.property', 42)
    }
    expect(result).toThrowError('No valid property')
  })
})

describe('fail', () => {
  test('null property', () => {
    let obj = { path: { to: null } }
    function result() {
      set(obj, 'path.to.deeply.nested.property', 42)
    }
    expect(result).toThrowError('No valid property')
  })
})
