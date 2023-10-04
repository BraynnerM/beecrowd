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
let x = parseInt(lines[0]);
let z = parseInt(lines[1]);
let i = 2;
while (z <= x) {
    z = parseInt(lines[i])
    i++
}
let count = 0;
let result = 0;

for (let i = x; i < z; i++) {
  result += i;
  count++;

  if (result > z) {
    break;
  }
}

console.log(count);

