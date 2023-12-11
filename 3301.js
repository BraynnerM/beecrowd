var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let nomes = lines[0].split(" ");
let H = parseInt(nomes[0]);
let Z = parseInt(nomes[1]);
let L = parseInt(nomes[2]);


function meio(H, Z, L) {
    if (H > Z && H <L || H < Z && H > L) {
        console.log("huguinho");
    }else if (Z > H && Z <L || Z < H && Z > L) {
        console.log("zezinho");
    }

    else {
        console.log("luisinho");
    }
}

meio(H, Z, L);
