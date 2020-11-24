function querySelectorAll(str) {
  const [parent, child] = str.split('<')
  if (!child) {
    return document.querySelectorAll(parent)
  }
  const nodeList = document.querySelectorAll(parent)
  const list = Array.from(nodeList)
  const result = list.filter((elem) => elem.querySelector(`:scope > ${child}`))

  return result
}
module.exports = querySelectorAll
