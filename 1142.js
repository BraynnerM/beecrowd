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
let a = 1;
let b = 2;
let c = 3;
if (x>0) {
    for (let index = 0; index < x; index++) {
        console.log(a+" "+b+" "+c+" "+"PUM")
        a += 4; 
        b += 4; 
        c += 4;        
    }
}