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

let i = 0;
let x = undefined;
let y = undefined;
do {
    const element = lines[i].split(" ");
    x = parseInt(element[0]);
    y = parseInt(element[1]);
    i++;
    if (x > 0 && y > 0) {
        console.log('primeiro');
    } else if (x < 0 && y > 0) {        
        console.log('segundo');
    } else if (x < 0 && y < 0) {
        console.log('terceiro');
    } else if (x > 0 && y < 0) {
        console.log('quarto');
    }
} while (x != 0 || y != 0);

