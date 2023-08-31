const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines1 = lines[0].split(" ");
lines2 = lines[1].split(" ");
//obtem o primeiro valor do arquivo stdin
let x1 = parseFloat(lines1[0]);
let y1 = parseFloat(lines1[1]);
let x2 = parseFloat(lines2[0]);
let y2 = parseFloat(lines2[1]);

console.log(Math.sqrt(((x2-x1)**2+(y2-y1)**2)).toFixed(4));