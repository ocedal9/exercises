const { flatten, flattenImp } = require('./function')
describe('Functional', () => {
  test('test case with proposed object', () => {
    const oldObj = {
      name: 'Sara',
      gender: 'Apache Attack Helicopter',
      address: {
        location: {
          city: 'SF',
          state: 'CA',
        },
        preferredLocation: {
          city: 'SF',
          state: ['CA', 'MN'],
        },
        other: undefined,
      },
    }
    const start = Date.now()
    const result = flatten(oldObj, 'oldObj')
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual({
      oldObj_name: 'Sara',
      oldObj_gender: 'Apache Attack Helicopter',
      oldObj_address_location_city: 'SF',
      oldObj_address_location_state: 'CA',
      oldObj_address_preferredLocation_city: 'SF',
      oldObj_address_preferredLocation_state: ['CA', 'MN'],
      oldObj_address_other: undefined,
    })
  })
})

describe('Functional', () => {
  test('test with null and undefined', () => {
    const oldObj = {
      name: null,
      gender: undefined,
      address: {
        location: {
          city: null,
          state: undefined,
        },
        preferredLocation: {
          city: undefined,
          state: [null, undefined],
        },
        other: undefined,
      },
    }
    const start = Date.now()
    const result = flatten(oldObj, 'oldObj')
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual({
      oldObj_name: null,
      oldObj_gender: undefined,
      oldObj_address_location_city: null,
      oldObj_address_location_state: undefined,
      oldObj_address_preferredLocation_city: undefined,
      oldObj_address_preferredLocation_state: [null, undefined],
      oldObj_address_other: undefined,
    })
  })
})

describe('Functional', () => {
  test('test with boolean, strings, numbers', () => {
    const oldObj = {
      name: 1,
      gender: false,
      address: {
        location: {
          city: 189089,
          state: undefined,
        },
        preferredLocation: {
          city: undefined,
          state: [true, undefined],
        },
        other: 'superstring',
      },
    }
    const start = Date.now()
    const result = flatten(oldObj, 'oldObj')
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual({
      oldObj_name: 1,
      oldObj_gender: false,
      oldObj_address_location_city: 189089,
      oldObj_address_location_state: undefined,
      oldObj_address_preferredLocation_city: undefined,
      oldObj_address_preferredLocation_state: [true, undefined],
      oldObj_address_other: 'superstring',
    })
  })
})

describe('Functional', () => {
  test('test with arrays inside objects, and objects inside arrays', () => {
    const oldObj = {
      name: {
        enter: [3, 4],
        name2: { name21: [{ inner1: 'value' }, { inner1: 'ff' }] },
      },
      gender: [false, null],
      address: {
        location: {
          city: [1, 2, 3, 4],
          state: [],
        },
        preferredLocation: {
          city: ['string', 1, true, undefined],
          state: [true, undefined],
        },
        other: ['superstring'],
      },
    }
    const start = Date.now()
    const result = flatten(oldObj, 'oldObj')
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual({
      oldObj_name_enter: [3, 4],
      oldObj_name_name2_name21: [{ inner1: 'value' }, { inner1: 'ff' }],
      oldObj_gender: [false, null],
      oldObj_address_location_city: [1, 2, 3, 4],
      oldObj_address_location_state: [],
      oldObj_address_preferredLocation_city: ['string', 1, true, undefined],
      oldObj_address_preferredLocation_state: [true, undefined],
      oldObj_address_other: ['superstring'],
    })
  })
})

describe('Imperative', () => {
  test('test case with proposed object', () => {
    const oldObj = {
      name: 'Sara',
      gender: 'Apache Attack Helicopter',
      address: {
        location: {
          city: 'SF',
          state: 'CA',
        },
        preferredLocation: {
          city: 'SF',
          state: ['CA', 'MN'],
        },
        other: undefined,
      },
    }
    const start = Date.now()
    const result = flattenImp(oldObj, 'oldObj')
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual({
      oldObj_name: 'Sara',
      oldObj_gender: 'Apache Attack Helicopter',
      oldObj_address_location_city: 'SF',
      oldObj_address_location_state: 'CA',
      oldObj_address_preferredLocation_city: 'SF',
      oldObj_address_preferredLocation_state: ['CA', 'MN'],
      oldObj_address_other: undefined,
    })
  })
})

describe('Imperative', () => {
  test('test with null and undefined', () => {
    const oldObj = {
      name: null,
      gender: undefined,
      address: {
        location: {
          city: null,
          state: undefined,
        },
        preferredLocation: {
          city: undefined,
          state: [null, undefined],
        },
        other: undefined,
      },
    }
    const start = Date.now()
    const result = flattenImp(oldObj, 'oldObj')
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual({
      oldObj_name: null,
      oldObj_gender: undefined,
      oldObj_address_location_city: null,
      oldObj_address_location_state: undefined,
      oldObj_address_preferredLocation_city: undefined,
      oldObj_address_preferredLocation_state: [null, undefined],
      oldObj_address_other: undefined,
    })
  })
})

describe('Imperative', () => {
  test('test with boolean, strings, numbers', () => {
    const oldObj = {
      name: 1,
      gender: false,
      address: {
        location: {
          city: 189089,
          state: undefined,
        },
        preferredLocation: {
          city: undefined,
          state: [true, undefined],
        },
        other: 'superstring',
      },
    }
    const start = Date.now()
    const result = flattenImp(oldObj, 'oldObj')
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual({
      oldObj_name: 1,
      oldObj_gender: false,
      oldObj_address_location_city: 189089,
      oldObj_address_location_state: undefined,
      oldObj_address_preferredLocation_city: undefined,
      oldObj_address_preferredLocation_state: [true, undefined],
      oldObj_address_other: 'superstring',
    })
  })
})

describe('Imperative', () => {
  test('test with arrays inside objects, and objects inside arrays', () => {
    const oldObj = {
      name: {
        enter: [3, 4],
        name2: { name21: [{ inner1: 'value' }, { inner1: 'ff' }] },
      },
      gender: [false, null],
      address: {
        location: {
          city: [1, 2, 3, 4],
          state: [],
        },
        preferredLocation: {
          city: ['string', 1, true, undefined],
          state: [true, undefined],
        },
        other: ['superstring'],
      },
    }
    const start = Date.now()
    const result = flattenImp(oldObj, 'oldObj')
    const end = Date.now()
    const time = end - start
    expect(time).toBeLessThan(10)
    expect(result).toEqual({
      oldObj_name_enter: [3, 4],
      oldObj_name_name2_name21: [{ inner1: 'value' }, { inner1: 'ff' }],
      oldObj_gender: [false, null],
      oldObj_address_location_city: [1, 2, 3, 4],
      oldObj_address_location_state: [],
      oldObj_address_preferredLocation_city: ['string', 1, true, undefined],
      oldObj_address_preferredLocation_state: [true, undefined],
      oldObj_address_other: ['superstring'],
    })
  })
})
