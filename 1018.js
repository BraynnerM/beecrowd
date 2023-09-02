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
let n = parseInt(lines[0]);

let nota100=parseInt(n/100)
let nota50 =parseInt((n%100)/50)
let nota20 =parseInt(((n%100)%50)/20)
let nota10 =parseInt((((n%100)%50)%20)/10)
let nota5 =parseInt(((((n%100)%50)%20)%10)/5)
let nota2 =parseInt((((((n%100)%50)%20)%10)%5)/2)
let nota1 =parseInt((((((n%100)%50)%20)%10)%5)%2)

console.log(n)
console.log(nota100+" nota(s) de R$ 100,00")
console.log(nota50+" nota(s) de R$ 50,00")
console.log(nota20+" nota(s) de R$ 20,00")
console.log(nota10+" nota(s) de R$ 10,00")
console.log(nota5+" nota(s) de R$ 5,00")
console.log(nota2+" nota(s) de R$ 2,00")
console.log(nota1+" nota(s) de R$ 1,00")