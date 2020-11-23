function querySelectorAll(str) {
  let result = []
  const [parent, child] = str.split('<')
  if (!child) {
    return document.querySelectorAll(parent)
  }
  const list = document.querySelectorAll(child)
  for (let elem of list) {
    const parentElem = elem.parentElement
    const match = parentElem.matches(parent)
    if (match) {
      result.push(parentElem)
    }
  }
  return result
}
module.exports = querySelectorAll
