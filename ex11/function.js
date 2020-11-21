function querySelectorAll(str) {
  let result = []
  const [parent, child] = str.split('<')
  const list = document.querySelectorAll(parent)
  for (let elem of list) {
    const hasChild = elem.querySelector(child)
    if (hasChild) {
      result.push(elem)
    }
  }
  return result
}
module.exports = querySelectorAll
