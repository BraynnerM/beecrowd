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
let x = parseFloat(lines1[0]);
let y = parseFloat(lines1[1]);

if (x>0.0 && y>0.0) {
    console.log("Q1");
}else if (x<0.0 && y<0.0) {
    console.log("Q3");
}else if (x>0.0 && y<0.0) {
    console.log("Q4");
}else if (x<0.0 && y>0.0) {
    console.log("Q2");
}else if (x===0 && y===0) {
    console.log("Origem");
} else if (y == 0) {
    console.log("Eixo X");
}else if (x == 0) {
    console.log("Eixo Y");
}