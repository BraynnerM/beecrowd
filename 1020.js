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
let total = parseInt(lines[0]);
let anos = Math.floor(total/365);
let restanteDias = total % 365;
let meses =Math.floor(restanteDias / 30)
let dias =Math.floor(restanteDias % 30)

console.log(anos+" ano(s)")
console.log(meses+" mes(es)")
console.log(dias+" dia(s)")