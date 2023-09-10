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
let A = parseFloat(lines1[0]);
let B = parseFloat(lines1[1]);
let C = parseFloat(lines1[2]);

if (B > A) {
    [A, B] = [B, A];
  }
  
    if (C > A) {
    [A, C] = [C, A];
  }

if ( A>= B+C ) {
    console.log("NAO FORMA TRIANGULO");
} else if (A*A == (B*B+C*C)) {
    console.log("TRIANGULO RETANGULO");
} else if (A*A > (B*B+C*C)) {
    console.log("TRIANGULO OBTUSANGULO");
} else if (A*A < (B*B+C*C)) {
    console.log("TRIANGULO ACUTANGULO");    
}

if (A == B && B == C) {
    console.log("TRIANGULO EQUILATERO");
} else if (A == B || A == C || B == C) {
    console.log("TRIANGULO ISOSCELES");
}