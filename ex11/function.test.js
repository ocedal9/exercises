const querySelectorAll = require('./function')
const { getByTestId } = require('@testing-library/dom')

test('proposed Dom, 3 matches', () => {
  document.body.innerHTML = `
<section>
        <div id="1" class="note"><input data-testid="1" type="checkbox" class="is-complete" checked> </div>
        <div id="2" class="note"></div>
        <div id="3" class="note"><input data-testid="2" type="checkbox" class="is-complete" checked></div>
        <div id="4" class="note"></div>
        <div id="5" class="note"><input data-testid="3" type="checkbox" class="is-complete" checked></div>
     </section>
`
  const result = querySelectorAll('div.note < input.is-complete[checked]')
  let i = 1
  for (elem of result) {
    const childAttributes = getByTestId(elem, `${i++}`).getAttributeNames()
    expect(childAttributes).toEqual(['data-testid', 'type', 'class', 'checked'])
  }
  expect(i - 1).toBe(3)
})

test('changing child attribute to unchecked, 2 matches', () => {
  document.body.innerHTML = `
  <section>
          <div id="1" class="note"><input data-testid="1" type="checkbox" class="is-complete" checked> </div>
          <div id="2" class="note"></div>
          <div id="3" class="note"><input data-testid="2" type="checkbox" class="is-complete" checked></div>
          <div id="4" class="note"></div>
          <div id="5" class="note"><input data-testid="3" type="radio" class="is-complete" unChecked></div>
       </section>
  `
  const result = querySelectorAll('div.note < input.is-complete[checked]')
  let i = 1
  for (elem of result) {
    const childAttributes = getByTestId(elem, `${i++}`).getAttributeNames()
    expect(childAttributes).toEqual(['data-testid', 'type', 'class', 'checked'])
  }
  expect(i - 1).toBe(2)
})

test('changing child atributte and parent clase, 1 match', () => {
  document.body.innerHTML = `
    <section>
            <div id="1" class="note"><input data-testid="1" type="checkbox" class="is-complete" checked> </div>
            <div id="2" class="note"></div>
            <span id="3" class="note"><input data-testid="2" type="checkbox" class="is-complete" checked></span>
            <div id="4" class="note"></div>
            <div id="5" class="notANote"><input data-testid="3" type="radio" class="is-complete" checked></div>
         </section>
    `
  const result = querySelectorAll('div.note < input.is-complete[checked]')
  let i = 1
  for (elem of result) {
    const childAttributes = getByTestId(elem, `${i++}`).getAttributeNames()
    expect(childAttributes).toEqual(['data-testid', 'type', 'class', 'checked'])
  }
  expect(i - 1).toBe(1)
})
