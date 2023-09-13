const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines1 = lines[0].split(" ");
//obtem o primeiro valor do arquivo stdin
let salario = parseFloat(lines[0]);

if ( salario <= 2000.00) {
    console.log("Isento");
} else if (salario <= 3000.00) {
    console.log("R$ "+((salario-2000.00)*0.08).toFixed(2));
} else if (salario <= 4500.00) {
    console.log("R$ "+((salario-3000.00)*0.18+80).toFixed(2));
} else {
    console.log("R$ "+((salario-4500.00)*0.28+80+270).toFixed(2));    
}