function set(obj, path, value) {
  const keysArr = path.split('.')
  let nod = obj
  for (let i = 0; i < keysArr.length; i++) {
    if (i === keysArr.length - 1) {
      nod[keysArr[i]] = value
      return obj
    } else if (
      typeof nod[keysArr[i]] === 'function' ||
      (typeof nod[keysArr[i]] === 'object' && nod[keysArr[i]] !== null)
    ) {
      nod = nod[keysArr[i]]
    } else if (nod[keysArr[i]] === undefined) {
      nod[keysArr[i]] = {}
      nod = nod[keysArr[i]]
    } else {
      throw new Error('No valid property')
    }
  }
}
module.exports = set
