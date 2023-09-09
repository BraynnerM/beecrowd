const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines1 = lines[0].split(" ");
//obtem o primeiro valor do arquivo stdin
let codigo = parseInt(lines1[0]);
let qtde = parseInt(lines1[1]);

switch (codigo) {
    case 1:
        var total = qtde*4               
        break;
    case 2:
        var total = qtde*4.5
        break;
    case 3:
        var total = qtde*5
        break;
    case 4:
        var total = qtde*2
        break;
    case 5:
        var total = qtde*1.5
        break;
    default:
        console.log('Código Inválido')
}
console.log('Total: R$ '+total.toFixed(2))