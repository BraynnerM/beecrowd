const { Console } = require('console');
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
//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines = lines[0].split(" ");
//obtem o primeiro valor do arquivo stdin
let A = (parseFloat(lines[0])).toFixed(1);
let B = (parseFloat(lines[1])).toFixed(1);
let C = (parseFloat(lines[2])).toFixed(1);

const delta = B*B-4*A*C

if (A == 0 || delta < 0){
    console.log('Impossivel calcular')  
}else {    
    const x1=(-B+Math.sqrt(delta))/(2*A)
    const x2=(-B-Math.sqrt(delta))/(2*A)
    console.log("R1 = "+(x1).toFixed(5));
    console.log("R2 = "+(x2).toFixed(5));
}