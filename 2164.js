var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function fibonacciBinet(n) {
    const phi = (1 + Math.sqrt(5)) / 2;
    const fibN = (Math.pow(phi, n) - Math.pow(-phi, -n)) / Math.sqrt(5);
    return fibN.toFixed(1);
}

// Leitura da entrada
const n = parseInt(lines[0]);

// Cálculo e impressão do resultado
const resultado = fibonacciBinet(n);
console.log(resultado);
