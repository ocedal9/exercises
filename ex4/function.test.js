const mergeArrays = require('./function');

test("all numbers diferent", () => {
  const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
  const smallArray = [0, 2, 4, 6, 8];
  const result = mergeArrays(largeArray, smallArray)
  expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
}
)

test("numbers repeted", () => {
  const largeArray = [1, 3, 3, 7, 9].concat(new Array(5));
  const smallArray = [0, 2, 4, 6, 9];
  const result = mergeArrays(largeArray, smallArray)
  expect(result).toStrictEqual([0, 1, 2, 3, 3, 4, 6, 7, 9, 9])
}
)

test("smallArray has 3 first small numbers", () => {
  const largeArray = [3, 5, 7, 9, 9].concat(new Array(5));
  const smallArray = [0, 1, 2, 4, 6];
  const result = mergeArrays(largeArray, smallArray)
  expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 9, 9])
}
)

test("Diferent length", () => {
  const largeArray = [3, 5, 7, 10, 13, 54, 68].concat(new Array(3));
  const smallArray = [0, 6, 28];
  const result = mergeArrays(largeArray, smallArray)
  expect(result.length).toBe(largeArray.length)
  expect(result).toStrictEqual([0, 3, 5, 6, 7, 10, 13, 28, 54, 68])
}
)