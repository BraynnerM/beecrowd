const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines1 = lines[0].split(" ");
lines2 = lines[1].split(" : ");
lines3 = lines[2].split(" ");
lines4 = lines[3].split(" : ");
//obtem o primeiro valor do arquivo stdin
let diaInicial = parseInt(lines1[1]);
let horaInicial = parseInt(lines2[0]);
let minutoInicial = parseInt(lines2[1]);
let segundoInicial = parseInt(lines2[2]);
let diaFinal = parseInt(lines3[1]);
let horaFinal = parseInt(lines4[0]);
let minutoFinal = parseInt(lines4[1]);
let segundoFinal = parseInt(lines4[2]);

let dia, hora, minuto, segundo;

tempoInicialTotal = segundoInicial+(minutoInicial*60)+(horaInicial*60*60)+(diaInicial*24*60*60)
tempoFinalTotal = segundoFinal+(minutoFinal*60)+(horaFinal*60*60)+(diaFinal*24*60*60)

let intervalo = tempoFinalTotal-tempoInicialTotal

dia = parseInt(intervalo / (24*60*60))
intervalo = intervalo%(24*60*60)

hora = parseInt(intervalo / (60*60))
intervalo = intervalo%(60*60)

minuto = parseInt(intervalo / 60)
intervalo = intervalo%60

segundo = intervalo

console.log(dia + " dia(s)");
console.log(hora + " hora(s)");
console.log(minuto + " minuto(s)");
console.log(segundo + " segundo(s)");
