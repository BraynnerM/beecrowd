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
let n1, n2, n3, n4, n5, n6;
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;
n1 = parseFloat(lines[0]);
n2 = parseFloat(lines[1]);
n3 = parseFloat(lines[2]);
n4 = parseFloat(lines[3]);
n5 = parseFloat(lines[4]);

if (n1 % 2 == 0) {
    pares++
} else {
    impares++
}

if (n2 % 2 == 0) {
    pares++
} else {
    impares++
}

if (n3 % 2 == 0) {
    pares++
} else {
    impares++
}

if (n4 % 2 == 0) {
    pares++
} else {
    impares++
}

if (n5 % 2 == 0) {
    pares++
} else {
    impares++
}

if (n1 > 0) {
    positivos++
} else if (n1 < 0) {
    negativos++
}

if (n2 > 0) {
    positivos++
} else if (n2 < 0) {
    negativos++
}

if (n3 > 0) {
    positivos++
} else if (n3 < 0) {
    negativos++
}

if (n4 > 0) {
    positivos++
} else if (n4 < 0) {
    negativos++
}

if (n5 > 0) {
    positivos++
} else if (n5 < 0) {
    negativos++
}

console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");