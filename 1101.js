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

let somatoria = 0;
let i = 0;

do {
    const element = lines[i].split(" ");
    let x = parseInt(element[0]);
    let y = parseInt(element[1]);

    if (x > y) {        
        [x, y] = [y, x];
    }

    somatoria = 0;
    let valores = ""; 

    for (x; x <= y; x++) {
        valores += x + " "; 
        somatoria += x;
    }

    console.log(valores + "Sum=" + somatoria);

    i++;

} while (!lines[i].split(" ").some(num => parseInt(num) <= 0));

