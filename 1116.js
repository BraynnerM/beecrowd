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

let qtde = lines[0];
for (let index = 1; index <= qtde; index++) {
    let line = lines[index].split(" ");
    if (line[1] == 0 && line[0] != 0) {
        console.log("divisao impossivel");
    } else {
        let resultado = line[0] / line[1];
        console.log(resultado.toFixed(1))
    }

}