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
let i = 0;
let x = 0;
let alcool = 0;
let gasolina = 0;
let diesel = 0;

do {
    x = parseInt(lines[i]);
    switch (x) {
        case 1:
            alcool++
            break;

        case 2:
            gasolina++
            break;

        case 3:
            diesel++
            break;

        default:
            break;
    }
    i++
} while (x != 4)

console.log("MUITO OBRIGADO")
console.log("Alcool: "+alcool);
console.log("Gasolina: "+gasolina);
console.log("Diesel: "+diesel);