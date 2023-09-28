const { type } = require('os');
const path = require('path');
const { stringify } = require('querystring');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

//obtem o primeiro valor do arquivo stdin
let grenais = 0;
let inter = 0;
let gremio = 0;
let empate = 0;
let index = 0;
let indexX = 0;
let x = 0;
let pontuacao = [[]]

do {
    pontuacao[index] = lines[index].split(" ");    
    if (pontuacao[index][0] > pontuacao[index][1]) {
        inter++
    } else if (pontuacao[index][0] < pontuacao[index][1]) {
        gremio++
    } else if (pontuacao[index][0] == pontuacao[index][1]) {
        empate++
    }
    grenais++
    index+=2
    do {
        console.log("Novo grenal (1-sim 2-nao)");
        indexX++        
        x = lines[indexX] 
        indexX++          
    } while (x != 1 && x != 2)
    if (x == 2) {
        break
    }
} while (x == 1)
console.log(grenais + " grenais")
console.log("Inter:" + inter)
console.log("Gremio:" + gremio)
console.log("Empates:" + empate)
if (empate > inter && empate > gremio) {
    console.log("Nao houve vencedor")
} else if (inter < gremio) {
    console.log("Gremio venceu mais")
} else if (inter > gremio) {
    console.log("Inter venceu mais")
}