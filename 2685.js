var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
for (i = 0; i<(lines.length -1); i++){
    let graus = lines[i]
    if ( graus < 180 && graus >=90 ) {
        console.log("Boa Tarde!!")
    }else if ( graus >=180 && graus < 270) {
        console.log("Boa Noite!!")
    }else if (graus < 360 && graus >= 270) {
        console.log("De Madrugada!!")
    }else{
        console.log("Bom Dia!!")
    }
}
