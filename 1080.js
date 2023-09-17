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

let maior = -1;
let posicao = 0;
for (let index = 0; index <= 100; index++) {
    let valor = parseInt(lines[index]); // Leia um valor inteiro.

    if (valor > maior) {
        maior = valor
        posicao = index        
    }
}
console.log(maior);
console.log(posicao+1);