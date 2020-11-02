const fs = require('fs')
const wordListPath = require('word-list');
const { getLongestWord, Trie } = require('./function');

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
const VOWELS = 'aeiou';
const CONSONANTS = 'bcdfghjklmnpqrstvwxyz'
function getRandomLetter(letters, length) {
  var result = []
  for (var i = 0; i < length; i++) {
    var character = letters.charAt(Math.floor(Math.random() * letters.length))
    result.push(character)
  }
  return result
}

let myTrie = new Trie()
wordArray.forEach((word) => {
  myTrie.add(word)
})

// const letters = [...getRandomLetter(VOWELS, 4), ...getRandomLetter(CONSONANTS, 5)]


test("test aannt, must take less than 100ms", () => {
  const letters = ['a', "n", 'a', 'n', 't'];
  const start = Date.now()
  const result = getLongestWord(letters, myTrie)
  const end = Date.now()
  const time = (end - start)
  expect(time).toBeLessThan(100)
  expect(result).toBe("annat")
}
)

test("test benefic, must take less than 100ms", () => {
  const letters = ['a', 'b', 'c', 'e', 'e', 'f', 'i', 'j', 'n']
  const start = Date.now()
  const result = getLongestWord(letters, myTrie)
  const end = Date.now()
  const time = (end - start)
  expect(time).toBeLessThan(100)
  expect(result).toBe("benefic")
}
)

test("test dermatoglyphics, must take less than 100ms", () => {
  const letters = ['a', "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const start = Date.now()
  const result = getLongestWord(letters, myTrie)
  const end = Date.now()
  const time = (end - start)
  expect(time).toBeLessThan(100)
  expect(result).toBe("dermatoglyphics")
}
)

test("test psychotherapeutically, must take less than 100ms", () => {
  const letters = ['a', "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const start = Date.now()
  const result = getLongestWord(letters, myTrie)
  const end = Date.now()
  const time = (end - start)
  expect(time).toBeLessThan(500)
  expect(result).toBe("psychotherapeutically")
}
)

test("test electroencephalographically, must take less than 500ms", () => {
  const letters = ['a', "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const start = Date.now()
  const result = getLongestWord(letters, myTrie)
  const end = Date.now()
  const time = (end - start)
  expect(time).toBeLessThan(500)
  expect(result).toBe("electroencephalographically")
}
)

