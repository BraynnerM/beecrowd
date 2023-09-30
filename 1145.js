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
let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let linha = "";
let incremento = 0;
if ((y > 1 && y < 100000) && (x > 1 && x < 20)) {
    for (let index = 1; index <= y; index+=x) {
        linha=""
        for (let i = 1; i <=x; i++){
            linha += ((i+incremento)+" ")
        }
        console.log(linha.trimRight())
        incremento+= x
        
    }
}