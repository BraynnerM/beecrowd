const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines1 = lines[0].split(" ");
//obtem o primeiro valor do arquivo stdin
let n1 = parseInt(lines[0]);
let n2 = parseInt(lines[1]);
let n3 = parseInt(lines[2]);
let n4 = parseInt(lines[3]);
let n5 = parseInt(lines[4]);
let n6 = parseInt(lines[5]);
let cont = 0
if (n1 >= 0) {
    cont++
} if (n2 >= 0) {
    cont++
} if (n3 >= 0) {
    cont++
} if (n4 >= 0) {
    cont++
} if (n5 >= 0) {
    cont++
} if (n6 >= 0) {
    cont++
}

console.log(cont+" valores positivos");