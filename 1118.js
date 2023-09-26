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
let notaValida = 0;
let media = 0;
let x = 1;
do {
    for (let index = 0; index < lines.length; index++) {
        if (lines[index] >= 0 && lines[index] <= 10) {
            media += Number(lines[index]);
            notaValida++
        } else {
            console.log("nota invalida");
        }

        if (notaValida === 2) {
            console.log("media = " + (media / 2).toFixed(2));
            do {
                console.log("novo calculo (1-sim 2-nao)");
                index++
                x = lines[index]                                
            } while (x!=1 && x!=2)
            if (x === 2) {
                break
            }
            notaValida = 0
            media = 0
        }
    }
} while (x === 1)