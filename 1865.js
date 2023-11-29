var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
for (let i=1; i<=lines[0];i++){
    let nome = lines[i].split(" ");
    if (nome[0] == "Thor") {
        console.log("Y")
    }else{
        console.log("N")
    }
}
