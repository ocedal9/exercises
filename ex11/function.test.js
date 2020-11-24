const querySelectorAll = require('./function')
const { getByTestId } = require('@testing-library/dom')

test('proposed Dom, 3 matches', () => {
  document.body.innerHTML = `<section>
        <div id="a" class="note"><input data-testid="0" type="checkbox" class="is-complete" checked> </div>
        <div id="b" class="note"></div>
        <div id="c" class="note"><input data-testid="1" type="checkbox" class="is-complete" checked></div>
        <div id="d" class="note"></div>
        <div id="e" class="note"><input data-testid="2" type="checkbox" class="is-complete" checked></div>
     </section>`
  const result = querySelectorAll('div.note < input.is-complete[checked]')
  let i = 0
  for (elem of result) {
    const childAttributes = getByTestId(elem, `${i++}`).getAttributeNames()
    expect(childAttributes).toEqual(['data-testid', 'type', 'class', 'checked'])
  }
  expect(i).toBe(3)
})

test('deleting attribute checked of child, 2 matches', () => {
  document.body.innerHTML = `<section>
          <div id="a" class="note"><input data-testid="0" type="checkbox" class="is-complete" checked> </div>
          <div id="b" class="note"></div>
          <div id="c" class="note"><input data-testid="1" type="checkbox" class="is-complete" checked></div>
          <div id="d" class="note"></div>
          <div id="e" class="note"><input data-testid="2" type="radio" class="isnot-complete" ></div>
       </section>`
  const result = querySelectorAll('div.note < input.is-complete[checked]')
  let i = 0
  for (elem of result) {
    const childAttributes = getByTestId(elem, `${i++}`).getAttributeNames()
    expect(childAttributes).toEqual(['data-testid', 'type', 'class', 'checked'])
  }
  expect(i).toBe(2)
})

test('changing div for span in one parent and changing class of another, 1 match', () => {
  document.body.innerHTML = `<section>
            <div id="a" class="note"><input data-testid="0" type="checkbox" class="is-complete" checked> </div>
            <div id="b" class="note"></div>
            <span id="c" class="note"><input data-testid="1" type="checkbox" class="is-complete" checked></span>
            <div id="d" class="note"></div>
            <div id="e" class="notNote"><input data-testid="2" type="checkbox" class="is-complete" checked></div>
         </section>`
  const result = querySelectorAll('div.note < input.is-complete[checked]')
  let i = 0
  for (elem of result) {
    const childAttributes = getByTestId(elem, `${i++}`).getAttributeNames()
    expect(childAttributes).toEqual(['data-testid', 'type', 'class', 'checked'])
  }
  expect(i).toBe(1)
})

test('using Combinators, 1 match', () => {
  document.body.innerHTML = `<section>
  <div  class="a">
      <div data-testid="0" class="middle">
          <span class="target">a</span>
      </div>
  </div>
</section>`
  const result = querySelectorAll('.a < .middle .target')
  let i = 0
  for (elem of result) {
    const attributes = getByTestId(elem, `${i++}`).getAttributeNames()
    expect(attributes).toEqual(['data-testid', 'class'])
  }
  expect(i).toBe(1)
})

test('normal querSelectorAll argument, 1 match', () => {
  document.body.innerHTML = `<section>
  <div  class="a">
      <div data-testid="0" class="middle" id="a" >
          <span class="target">a</span>
      </div>
  </div>
</section>`
  const result = querySelectorAll('.middle ')
  const attributes = getByTestId(document, `0`).getAttributeNames()
  expect(result[0].getAttributeNames()).toEqual(attributes)
})
