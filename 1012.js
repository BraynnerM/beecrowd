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
let a = parseFloat(lines1[0]);
let b = parseFloat(lines1[1]);
let c = parseFloat(lines1[2]);
let pi = 3.14159;

console.log("TRIANGULO: "+((a*c)/2).toFixed(3));
console.log("CIRCULO: "+(pi*(c**2)).toFixed(3));
console.log("TRAPEZIO: "+((a+b)*(c/2)).toFixed(3));
console.log("QUADRADO: "+(b*b).toFixed(3));
console.log("RETANGULO: "+(a*b).toFixed(3));

