var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let entrada = lines[0].split(" ");
let a = parseInt(entrada[0]);
let b = parseInt(entrada[1]);
let c = parseInt(entrada[2]);
if (a - b === 0 || a - c === 0 || b - c === 0) {
    console.log('S');
} else {
    if (a + b - c === 0 || b - a + c === 0 || c - a + b === 0) {
        console.log('S');
    } else if (a - b - c === 0 || b - a - c === 0 || c - a - b === 0) {
        console.log('S');
    } else {
        console.log('N');
    }
}
