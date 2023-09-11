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
let horaInicial = parseInt(lines1[0]);
let minutoInicial = parseInt(lines1[1]);
let horaFinal = parseInt(lines1[2]);
let minutoFinal = parseInt(lines1[3]);

minutoInicial = minutoInicial + (horaInicial*60)
minutoFinal = minutoFinal + (horaFinal*60)

tempo = minutoFinal-minutoInicial

if (tempo<=0){
    tempo = tempo+(24*60)
}

let hora = parseInt(tempo/60)
let minuto = tempo%60

console.log("O JOGO DUROU "+hora+" HORA(S) E "+minuto+" MINUTO(S)");