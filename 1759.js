var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
cont = parseInt(lines[0])
total =[];
for (let i = 0; i < cont; i++) {
    total.push("Ho ")
}
let totalJoin = total.join('')
let totalTrim = totalJoin.trim()
console.log(totalTrim + "!");
