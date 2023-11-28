var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function decimalParaHexadecimal(decimal) {

    let hexadecimal = decimal.toString(16);

    return hexadecimal;
}

let numeroDecimal = parseInt(lines[0]);
let numeroHexadecimal = decimalParaHexadecimal(numeroDecimal);

console.log(numeroHexadecimal.toUpperCase())
