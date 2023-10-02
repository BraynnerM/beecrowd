const { type } = require('os');
const path = require('path');
const { stringify } = require('querystring');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

//obtem o primeiro valor do arquivo stdin
lines = lines[0].split(" ");
let i = 1;
let A = parseInt(lines[0]);
while (lines[i]<= 0) {
    i++
}
let N = parseInt(lines[i]);
let total = 0;
for (let index = 0; index < N; index++) {
    total += (A + index)
    
}
console.log(total);