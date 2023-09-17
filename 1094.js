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
let entrada = [];
let total = 0;
let c = 0;
let r = 0;
let s = 0;
for (let index = 1; index <= n; index++) {
    entrada = lines[index].split(" ");
    total += parseInt(entrada[0])
    switch (entrada[1]) {
        case "C":
            c = c+parseInt(entrada[0])
            break;

        case "R":
            r = r+parseInt(entrada[0])
            break;

        case "S":
            s = s+parseInt(entrada[0])
            break;

        default:
            break;
    }
}

console.log("Total: "+total+" cobaias");
console.log("Total de coelhos: "+c);
console.log("Total de ratos: "+r);
console.log("Total de sapos: "+s);
console.log("Percentual de coelhos: "+(c/total*100).toFixed(2)+" %");
console.log("Percentual de ratos: "+(r/total*100).toFixed(2)+" %");
console.log("Percentual de sapos: "+(s/total*100).toFixed(2)+" %");