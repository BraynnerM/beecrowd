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
let codigo1 = parseInt(lines1[0]);
let qtde1 = parseInt(lines1[1]);
let valor1 = parseFloat(lines1[2]);
let codigo2 = parseInt(lines2[0]);
let qtde2 = parseInt(lines2[1]);
let valor2 = parseFloat(lines2[2]);

console.log("VALOR A PAGAR: R$ "+((qtde1*valor1)+(qtde2*valor2)).toFixed(2));
