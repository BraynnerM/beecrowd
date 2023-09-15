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
let qtdePositivos = 0;
let somatoria = 0;
n1 = parseFloat(lines[0]);
n2 = parseFloat(lines[1]);
n3 = parseFloat(lines[2]);
n4 = parseFloat(lines[3]);
n5 = parseFloat(lines[4]);
n6 = parseFloat(lines[5]);

if (n1 >=0) {
    qtdePositivos++
    somatoria = somatoria+n1
}

if (n2 >=0) {
    qtdePositivos++
    somatoria = somatoria+n2
}

if (n3 >=0) {
    qtdePositivos++
    somatoria = somatoria+n3
}

if (n4 >=0) {
    qtdePositivos++
    somatoria = somatoria+n4
}

if (n5 >=0) {
    qtdePositivos++
    somatoria = somatoria+n5
}

if (n6 >=0) {
    qtdePositivos++
    somatoria = somatoria+n6
}

console.log(qtdePositivos+" valores positivos");
console.log((somatoria/qtdePositivos).toFixed(1));