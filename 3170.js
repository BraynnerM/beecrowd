const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha

let b = parseInt(lines[0]);
let g = parseInt(lines[1]);

if (b*2 >= g) {
    console.log("Amelia tem todas bolinhas!");
}else{    
    console.log("Faltam "+parseInt((g - b*2)/2)+" bolinha(s)");
}