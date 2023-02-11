const { simplify, parse, derivative } = require('mathjs')

console.log('simplify expressions')
console.log(simplify('3 + 2 / 4').toString())
console.log(simplify('2x + 3x').toString()) 
console.log(simplify('2 * 3 * x', { x: 4 }).toString()) 
console.log(simplify('x^2 + x + 3 + x^2').toString()) 
console.log(simplify('x * y * -x / (x ^ 2)').toString()) 

const f = parse('2x + x')
const simplified = simplify(f)
console.log(simplified.toString()) 
console.log(simplified.evaluate({ x: 4 }))
console.log()

console.log('calculate derivatives')
console.log(derivative('2x^2 + 3x + 4', 'x').toString()) 
console.log(derivative('sin(2x)', 'x').toString())

const h = parse('x^2 + x')
const dh = derivative(h, 'x')
console.log(dh.toString()) 
console.log(dh.evaluate({ x: 3 })) 

//Xorshift

var xorshift = require('xorshift');

for (var i = 0; i < 10; i++) {
  console.log(xorshift.random()); // number in range [0, 1)
}
