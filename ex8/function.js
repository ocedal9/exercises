function flatten(obj, parentName, newObj = {}) {
  const entries = Object.entries(obj)
  entries.reduce((acu, pair) => {
    let keyString = parentName.concat('_', pair[0])
    if (
      typeof pair[1] === 'object' &&
      pair[1] != null &&
      !Array.isArray(pair[1])
    ) {
      flatten(pair[1], keyString, newObj)
    } else {
      newObj[keyString] = pair[1]
    }
    return newObj
  }, 0)
  return newObj
}

function flattenImp(oldObject, parentName) {
  let newObj = {}
  let nestedObj = function (obj, name) {
    const entries = Object.entries(obj)
    for (let i = 0; i < entries.length; i++) {
      let keyString = name.concat('_', entries[i][0])
      if (
        typeof entries[i][1] === 'object' &&
        entries[i][1] != null &&
        !Array.isArray(entries[i][1])
      ) {
        nestedObj(entries[i][1], keyString)
      } else {
        newObj[keyString] = entries[i][1]
      }
    }
  }
  nestedObj(oldObject, parentName)
  return newObj
}

module.exports = { flatten, flattenImp }
