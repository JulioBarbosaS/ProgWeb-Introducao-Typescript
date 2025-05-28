let a: number =  10;
let b: number =  14;

//Aritméticos (+,-,*,/,%)
console.log('soma', a + b);
console.log('subtracao', a - b);
console.log('multiplicação', a * b);
console.log('Divisão', a / b);
console.log('Resto', a % b); /*percent*/

//Relacionais
console.log('Igual:', a == b);;
console.log('Diferente:', a != b);
console.log('Maior que:', a > b);
console.log('Menor que:', a < b);
console.log('Maior igual:', a >= b);
console.log('Menor ou igual:', a <= b);

//Identidade Restrita
console.log('Identico', a === b);
console.log('Não identico', a !== b);

//Lógicos
let x: boolean = true;
let y : boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);

//Operador condicional (ternário)
let idade: number = 17;
let acesso = idade >= 18 ? 'Permitido beijar na boca' : 'Não permitido'; /*condioção ? valor se true : valor se false*/