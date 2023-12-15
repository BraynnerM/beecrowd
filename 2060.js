const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
let arrayDeValores = lines[1].split(" ");
let M2 = 0;
let M3 = 0;
let M4 = 0;
let M5 = 0;
for (let i = 0; i < lines[0]; i++) {
    if ((parseInt(arrayDeValores[i]) % 2) === 0) {
        M2++
    }
    if ((parseInt(arrayDeValores[i]) % 3) === 0) {
        M3++
    }
    if ((parseInt(arrayDeValores[i]) % 4) === 0) {
        M4++
    }
    if ((parseInt(arrayDeValores[i]) % 5) === 0) {
        M5++
    }

}

console.log(M2 + " Multiplo(s) de 2");
console.log(M3 + " Multiplo(s) de 3");
console.log(M4 + " Multiplo(s) de 4");
console.log(M5 + " Multiplo(s) de 5");