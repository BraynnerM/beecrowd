var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let cartas = lines[0].split(' ');
let A = parseInt(cartas[0]);
let B = parseInt(cartas[1]);
let result;
if (A === B) {
   result = A;
} else {
    result = Math.max(A, B);
}
console.log(result);
