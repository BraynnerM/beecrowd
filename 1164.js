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
let N = parseInt(lines[0]);
let X;
let somatoria;
for (let index = 1; index <= N; index++) {
    X = parseInt(lines[index])
    somatoria = 0
    for (let index = 1; index < X; index++) {
        if ((X % index) === 0) {
            somatoria += index            
        }
    }
    if (somatoria === X) {
        console.log(X + " eh perfeito");
    } else {
        console.log(X + " nao eh perfeito");
    }
}