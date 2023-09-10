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
let A = parseFloat(lines1[0]);
let B = parseFloat(lines1[1]);
let C = parseFloat(lines1[2]);

if (A+B > C && A+C > B && B+C > A ) {
    const perimetro = A+B+C
    console.log("Perimetro = "+perimetro.toFixed(1));
}else{
    const area = ((A+B)*C)/2
    console.log("Area = "+area.toFixed(1));
}