function set(obj, path, value) {
  const keysArr = path.split('.')
  let nod = obj
  for (var i = 0; i < keysArr.length - 1; i++) {
    if (
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
  nod[keysArr[i]] = value
  return obj
}
module.exports = set
