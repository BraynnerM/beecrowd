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
let n1 = parseInt(lines1[0]);
let n2 = parseInt(lines1[1]);
let n3 = parseInt(lines1[2]);

let sorteio = [n1, n2, n3];
let sorteioOrdenado = sorteio.sort(compararNumeros)
console.log(sorteioOrdenado[0]);
console.log(sorteioOrdenado[1]);
console.log(sorteioOrdenado[2]);
console.log("");
console.log(n1);
console.log(n2);
console.log(n3);
function compararNumeros(a, b) {
    return a - b;
  }