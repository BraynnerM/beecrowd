var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
lines = lines[0].split(" ");

let c1 = lines[0], c2 = lines[1], c3 = lines[2], c4 = lines[3];

switch (true) {
    case c1 == 1:
        console.log(1);
        break;
    case c2 == 1:
        console.log(2);
        break;
    case c3 == 1:
        console.log(3);
        break;
    case c4 == 1:
        console.log(4);
        break;
    default:
        console.log("Nenhum feijão foi colocado dentro do copo.");
}