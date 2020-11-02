const reverseBlocks = require('./function');



test("10 elements, 3 block size", () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const blockSize = 3
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([2, 1, 0, 5, 4, 3, 8, 7, 6, 9])
}
)

test("11 elements, 3 block size", () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const blockSize = 3
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([2, 1, 0, 5, 4, 3, 8, 7, 6, 10, 9])
}
)

test("10 elements, 4 block size", () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const blockSize = 4
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([3, 2, 1, 0, 7, 6, 5, 4, 9, 8])
}
)

test("11 elements, 4 block size", () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const blockSize = 4
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([3, 2, 1, 0, 7, 6, 5, 4, 10, 9, 8])
}
)