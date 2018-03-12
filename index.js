var html = require('nanohtml')

var data1 = [
  'hi',
  'hello',
  'sup'
]

var data2 = [
  'banana',
  'apple',
  'peanut'
]

var el1 = html`
 ${data1.map(val => html`<p>${val}</p>`)}
 ${data2.map(val => html`<p>${val}</p>`)}
`

console.log(el1.toString())

var el2 = html`
  <div>
     ${data1.map(val => html`<p>${val}</p>`)
    .concat(data2.map(val => html`<p>${val}</p>`))}
  </div>
`

console.log(el2.toString())

var el3 = html`
  <div>${[
    ...data1.map(val => html`<p>${val}</p>`),
    ...data2.map(val => html`<p>${val}</p>`)
  ]}</div>
`

console.log(el3.toString())

var el4 = [
  ...data1.map(val => html`<p>${val}</p>`),
  ...data2.map(val => html`<p>${val}</p>`)
]

console.log(el4.toString())
