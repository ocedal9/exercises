let Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

let Trie = function () {

  this.root = new Node();
  this.longest = ''

  this.add = function (input, node = this.root) {
    const path = input.split('').sort().join('');
    for (let l of path) {
      if (!node.keys.has(l)) {
        node.keys.set(l, new Node());
      }
      node = node.keys.get(l);
    }
    node.setEnd();
    if (!node.word) {
      node.word = input;
    }
  };

  this.getLongest = function (array, str = '', node = this.root, idx = 0) {
    if (node.isEnd() && node.word.length >= str.length) {
      if (node.word.length == str.length) {
        let momArray = [str, node.word].sort()
        this.longest = momArray[0]
      } else {
        str = node.word;
        this.longest = str
      }
    }
    for (let [key, child] of node.keys) {
      const pos = array.indexOf(key, idx);
      if (pos !== -1) {
        const word = this.getLongest(array, str, child, pos + 1)
        if (word.length > str.length) str = word;
      }
    }
    return str;
  }
};

let getLongestWord = function (letters, myTrie) {
  myTrie.longest = ''
  const arr = letters.sort()
  myTrie.getLongest(arr)
  return myTrie.longest
}

exports.Trie = Trie
exports.getLongestWord = getLongestWord