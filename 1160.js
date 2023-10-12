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
let T = parseInt(lines[0]);

for (let index = 1; index <= T; index++) {
    let valores = lines[index].split(" ");
    let popA = parseInt(valores[0]);
    let popB = parseInt(valores[1]);
    let cresA = parseFloat(valores[2]);
    let cresB = parseFloat(valores[3]);
    let anos = 0;
    do {
        popA = parseInt(popA * (1 + (cresA / 100)));
        popB = parseInt(popB * (1 + (cresB / 100)));
        anos++
        if (anos > 100) {
            break;
        }
    } while (popA <= popB)
    if (anos > 100) {
        console.log("Mais de 1 seculo.");
    } else {
        console.log(anos + " anos.");
    }
}
