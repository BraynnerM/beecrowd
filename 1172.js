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
let X = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < X.length; i++) {
    X[i] = parseInt(lines[i])
    if (X[i] <= 0) {
        X[i] = 1
    }
}
for (let i = 0; i < X.length; i++) {
    console.log(`X[${i}] = ${X[i]}`);
}