const bar = require('./index')
afterEach(() => {
  jest.clearAllMocks()
})

test('checking bar construction', async () => {
  let argv2 = 2
  const processSpy = jest.spyOn(process.stdout, 'write')
  bar(argv2)
  expect(processSpy).toHaveBeenNthCalledWith(1, '\x1B[?25l\x1b[44m\x1b[37m[')
  expect(processSpy).toHaveBeenNthCalledWith(2, '\u2591')
  expect(processSpy).toHaveBeenNthCalledWith(51, '\u2591')
  expect(processSpy).toHaveBeenNthCalledWith(52, ']0%')
  expect(processSpy).toHaveBeenNthCalledWith(54, '\u2588')
  expect(processSpy).toHaveBeenNthCalledWith(80, '50%')
  expect(processSpy).toHaveBeenNthCalledWith(84, '\u2588')
  expect(processSpy).toHaveBeenNthCalledWith(108, '100%')
  processSpy.mockRestore()
})

test('10 prime numbers', async () => {
  let argv2 = 10
  result = bar(argv2)
  expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
})

test('100 prime numbers', async () => {
  let argv2 = 100
  result = bar(argv2)
  expect(result).toEqual([
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199,
    211,
    223,
    227,
    229,
    233,
    239,
    241,
    251,
    257,
    263,
    269,
    271,
    277,
    281,
    283,
    293,
    307,
    311,
    313,
    317,
    331,
    337,
    347,
    349,
    353,
    359,
    367,
    373,
    379,
    383,
    389,
    397,
    401,
    409,
    419,
    421,
    431,
    433,
    439,
    443,
    449,
    457,
    461,
    463,
    467,
    479,
    487,
    491,
    499,
    503,
    509,
    521,
    523,
    541,
  ])
})
