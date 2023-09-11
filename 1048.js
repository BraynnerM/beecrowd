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
let salarioNovo, percentual;
if (salario <=400.00 ) {
    salarioNovo = salario*1.15
    percentual = 15
} else if (salario <=800.00 ) {
    salarioNovo = salario*1.12
    percentual = 12
} else if (salario <=1200.00 ) {
    salarioNovo = salario*1.10
    percentual = 10
} else if (salario <=2000.00 ) {
    salarioNovo = salario*1.07
    percentual = 7
} else if (salario >=2000.00 ) {
    salarioNovo = salario*1.04
    percentual = 4
}

console.log("Novo salario: "+salarioNovo.toFixed(2));
console.log("Reajuste ganho: "+(salarioNovo-salario).toFixed(2));
console.log("Em percentual: "+percentual+" %");