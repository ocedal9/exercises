const isObject = (obj, key) => obj?.[key]?.constructor === Object

const val = (obj, key, namespace) =>
  isObject(obj, key) ? flatten(obj[key], namespace) : { [namespace]: obj[key] }

const reducer = (obj, namespace, acc, prop) => {
  return { ...acc, ...val(obj, prop, `${namespace}_${prop}`) }
}

const flatten = (obj, namespace) => {
  const result = Object.keys(obj).reduce(reducer.bind(null, obj, namespace), {})
  return { ...result }
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
