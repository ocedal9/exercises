const cancelableFetch = require('./function');
const url = 'https://jsonplaceholder.typicode.com/users/1'


const unmockedFetch = global.fetch

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve("Fetch resolved"))
})

afterAll(() => {
  global.fetch = unmockedFetch
})

describe("succes", () => {
  test('Fetch resolved', async () => {
    const result = await cancelableFetch(url)
    expect(result).toEqual("Fetch resolved")
  }
  )
}

)

describe("Cancel", () => {
  test('cancel fetch', async () => {
    try {
      await cancelableFetch(url).cancel("Fetch has been cancel")
    } catch (e) {
      expect(e).toMatch("Fetch has been cancel")
    }
  })
})

describe("Cancel", () => {
  test('cancel fetch, keep actions', async () => {
    const cancelCondition = true
    const result = cancelableFetch(url)
    result.then(console.log("first console log"))
      .then(console.log("second console.log"))
      .catch((e) => {
        expect(e).toMatch("canceled fetch")
      })
    if (cancelCondition) {
      // console.log("in cancel position")
      result.cancel("canceled fetch")
    }

  })
})
