const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines = lines[0].split(" ");
let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let total = (a + b + c);
//obtem o primeiro valor do arquivo stdin
if ( total >= 24) {
    let newTotal = (total-24)
    if (newTotal == 24) {
        newTotal = 0;
    }
    console.log(newTotal);
}else if (total <= 0) {
    let newTotal = (24+total)
    if (newTotal == 24) {
        newTotal = 0;
    }
    console.log(newTotal);    
}else{
    console.log(total);
}