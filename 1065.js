const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

//obtem o primeiro valor do arquivo stdin
let n1, n2, n3, n4, n5, n6;
let cont = 0;
n1 = parseFloat(lines[0]);
n2 = parseFloat(lines[1]);
n3 = parseFloat(lines[2]);
n4 = parseFloat(lines[3]);
n5 = parseFloat(lines[4]);

if (n1 % 2 == 0) {
    cont++
}

if (n2 % 2 == 0) {
    cont++
}

if (n3 % 2 == 0) {
    cont++
}

if (n4 % 2 == 0) {
    cont++
}

if (n5 % 2 == 0) {
    cont++
}

console.log(cont + " valores pares");