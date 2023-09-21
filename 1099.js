const { type } = require('os');
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

let n = parseInt(lines[0]);
let somatoria = 0;

for (let i = 1; i <= n; i++) {
    const element = lines[i].split(" ");
    let x = parseInt(element[0]);
    let y = parseInt(element[1]);

    if (x > y) {
        // Troca os valores de x e y se x for maior que y
        [x, y] = [y, x];
    }

    somatoria = 0;
    for (let j = x + 1; j < y; j++) {
        if (j % 2 !== 0) {
            somatoria += j;
        }
    }

    console.log(somatoria);
}