const getLong = require('./function');

test("At the start of the string", () => {
  const input = "aaaababcdfcdcf"
  const start = Date.now()
  const result = getLong(input)
  const end = Date.now()
  const time = (end - start)
  expect(time).toBeLessThan(50)
  expect(result).toBe("aaaabab")
}
)

test("In the middle of the string", () => {
  const input = "522345234512121212223311212223"
  const start = Date.now()
  const result = getLong(input)
  const end = Date.now()
  const time = (end - start)
  expect(time).toBeLessThan(50)
  expect(result).toBe("1212121222")
}
)

test("At the end of the string", () => {
  const input = "233112122237888788787888"
  const start = Date.now()
  const result = getLong(input)
  const end = Date.now()
  const time = (end - start)
  expect(time).toBeLessThan(50)
  expect(result).toBe("7888788787888")
}
)

test("very long string", () => {
  const input = "43523522345234511212223311212223788878878788843523522345234511212223311212223788878878788843523522345234511212223311212223788878878788843523522345234511212223311212223788878878788843523522345234511212223311212223788878878788843523522345234511212223311212223788878878788888888"
  const start = Date.now()
  const result = getLong(input)
  const end = Date.now()
  const time = (end - start)
  expect(time).toBeLessThan(50)
  expect(result).toBe("788878878788888888")
}
)

test("same character string", () => {
  const input = "2222"
  const start = Date.now()
  const result = getLong(input)
  const end = Date.now()
  const time = (end - start)
  expect(time).toBeLessThan(50)
  expect(result).toBe("2222")
}
)