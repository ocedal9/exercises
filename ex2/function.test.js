const queryRetry = require('./function');


const urlQuery = url => () => fetch(url)

const handleSuccess = res => console.log("final", res)
const handleErrorOrMaxRetryExceeded = () => console.log("Error fetching, number of retry fetch reached")

const someUrl = 'https://jsonplaceholder.typicode.com/users/1'

const unmockedFetch = global.fetch

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.reject("API DOWN"))
})

afterAll(() => {
  global.fetch = unmockedFetch
})

describe("fail", () => {
  test('Retry 1, no delay, no increment', async () => {
    const maxRetry1 = 1;
    const useIncrement1 = false;
    const delay1 = 0;
    const res = await queryRetry(urlQuery(someUrl), maxRetry1, delay1, useIncrement1)
    expect(res).toEqual(null)
    expect(fetch).toHaveBeenCalledTimes(1);
  }
  )
}
)

describe("fail", () => {
  test('Retry 2, delay 1s, no increment, must take 1000ms', async () => {
    const maxRetry2 = 2;
    const useIncrement2 = false;
    const delay2 = 1000;
    const start = Date.now()
    const res = await queryRetry(urlQuery(someUrl), maxRetry2, delay2, useIncrement2)
    const end = Date.now()
    const time = (end - start)
    const extraTime = time - 1000

    expect(res).toEqual(null)
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(extraTime).toBeLessThan(50)
  }
  )
}
)

describe("fail", () => {
  test('Retry 3, delay 1s, no increment, must take 2000ms', async () => {
    const maxRetry3 = 3;
    const useIncrement3 = false;
    const delay3 = 1000;
    const start = Date.now()
    const res = await queryRetry(urlQuery(someUrl), maxRetry3, delay3, useIncrement3)
    const end = Date.now()
    const time = (end - start)
    const extraTime = time - 2000

    expect(res).toEqual(null)
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(extraTime).toBeLessThan(50)
  }
  )
}
)

describe("fail", () => {
  test('Retry 3, delay 1s, with increment, must take 3000ms', async () => {
    const maxRetry4 = 3;
    const useIncrement4 = true;
    const delay4 = 1000;
    const start = Date.now()
    const res = await queryRetry(urlQuery(someUrl), maxRetry4, delay4, useIncrement4)
    const end = Date.now()
    const time = (end - start)
    const extraTime = time - 3000

    expect(res).toEqual(null)
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(extraTime).toBeLessThan(50)
  }
  )
}
)

describe("fail", () => {
  test('Retry 4, delay 1s, with increment, must take 6000ms', async () => {
    const maxRetry5 = 4;
    const useIncrement5 = true;
    const delay5 = 1000;
    const start = Date.now()
    const res = await queryRetry(urlQuery(someUrl), maxRetry5, delay5, useIncrement5)
    const end = Date.now()
    const time = (end - start)
    const extraTime = time - 6000

    expect(res).toEqual(null)
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(extraTime).toBeLessThan(50)
  }, 6200
  )
}
)

describe("success", () => {
  test('Success fetching', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve(3));
    const maxRetry5 = 4;
    const useIncrement5 = true;
    const delay5 = 1000;
    const res = await queryRetry(urlQuery(someUrl), maxRetry5, delay5, useIncrement5)
    expect(res).toEqual(3)
    expect(fetch).toHaveBeenCalledTimes(1);
  }
  )
}
)