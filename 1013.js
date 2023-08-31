const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines1 = lines[0].split(" ");
//obtem o primeiro valor do arquivo stdin
let a = parseInt(lines1[0]);
let b = parseInt(lines1[1]);
let c = parseInt(lines1[2]);

let maior = 0
if (a>maior) {
    maior = a
}
if (b>maior) {
    maior = b
}
if (c>maior) {
    maior = c
}

console.log(maior+" eh o maior" )
