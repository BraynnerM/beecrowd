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

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let total = 0;
if (x > y) {
    // Se x for maior que y, trocamos os valores para garantir que x seja menor que y.
    let temp = x;
    x = y;
    y = temp;
}

for (let i = x + 1; i < y; i++) {
    if (i % 2 !== 0) {
        total += i;
    }
}

console.log(total);