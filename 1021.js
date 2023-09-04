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
let valor = (lines[0]);
let n = parseInt(valor);
let centavos = ((valor - n).toFixed(2)*100);
let nota100= parseInt(n/100)
let nota50 = parseInt((n%100)/50)
let nota20 = parseInt(((n%100)%50)/20)
let nota10 = parseInt((((n%100)%50)%20)/10)
let nota5 = parseInt(((((n%100)%50)%20)%10)/5)
let nota2 = parseInt((((((n%100)%50)%20)%10)%5)/2)
let moeda100 = parseInt((((((n%100)%50)%20)%10)%5)%2)
let moeda50 = parseInt(centavos/50)
let moeda25 = parseInt((centavos%50)/25)
let moeda10 = parseInt(((centavos%50)%25)/10)
let moeda5 = parseInt((((centavos%50)%25)%10)/5)
let moeda1 = parseInt((((centavos%50)%25)%10)%5)

console.log("NOTAS:")
console.log(nota100+" nota(s) de R$ 100.00")
console.log(nota50+" nota(s) de R$ 50.00")
console.log(nota20+" nota(s) de R$ 20.00")
console.log(nota10+" nota(s) de R$ 10.00")
console.log(nota5+" nota(s) de R$ 5.00")
console.log(nota2+" nota(s) de R$ 2.00")
console.log("MOEDAS:")
console.log(moeda100+" moeda(s) de R$ 1.00")
console.log(moeda50+" moeda(s) de R$ 0.50")
console.log(moeda25+" moeda(s) de R$ 0.25")
console.log(moeda10+" moeda(s) de R$ 0.10")
console.log(moeda5+" moeda(s) de R$ 0.05")
console.log(moeda1+" moeda(s) de R$ 0.01")