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


const T_C = parseInt(lines[0]);

for (let t = 1; t <= T_C; t++) {
    const inputValues = lines[t].split(" ");
    const r1 = parseInt(inputValues[0]);
    const r2 = parseInt(inputValues[1]);

    const r3 = ((r1 * 2) + (r2 * 2)) / 2;

    console.log(Math.floor(r3));
}