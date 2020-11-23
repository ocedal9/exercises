require('jsdom-global')(
  // (`<section>
  // <div id="1" class="note"><input data-testid="0" type="checkbox" class="is-complete" checked> </div>
  // <div id="2" class="note"></div>
  // <div id="3" class="note"><input data-testid="1" type="checkbox" class="is-complete" checked></div>
  // <div id="4" class="note"></div>
  // <div id="5" class="note"><input data-testid="2" type="checkbox" class="is-complete" checked></div>
  // </section>`)
  `<section>
<div id="1" class="note"><input data-testid="0" type="checkbox" class="is-complete" checked> </div>
<div id="2" class="note"></div>
<span id="3" class="note"><input data-testid="1" type="checkbox" class="is-complete" checked></span>
<div id="4" class="note"></div>
<div id="5" class="notNote"><input data-testid="2" type="checkbox" class="is-complete" checked></div>
</section>`
)

function querySelectorAll(str) {
  let result = []
  const [parent, child] = str.split('<')
  console.log('parent', parent)
  console.log('child', child)
  if (!child) {
    return document.querySelectorAll(parent)
  }
  const list = document.querySelectorAll(child)
  console.log(list.length)
  for (let elem of list) {
    const parentElem = elem.parentElement
    const match = parentElem.matches(parent)
    console.log(parentElem, match)
    if (match) {
      result.push(parentElem)
    }
  }

  //
  return result
}
// const result = querySelectorAll('div.note < input.is-complete[checked]')
const result = querySelectorAll('div.note')

console.log(result, result.length)
