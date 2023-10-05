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

let N = parseInt(lines[0])

if (N >= 0 && N < 46) {
    let fibonacci = "0";
    let x = 0;
    let y = 1;

    for (let index = 1; index < N; index++) {
      if (index >= N - 1) {
        fibonacci += " " + y;
      } else {
        fibonacci += " " + y ;
        let next = x + y;
        x = y;
        y = next;
      }
    }

    console.log(fibonacci);
  } else {
    console.log("O valor de N deve estar no intervalo de 0 a 45.");
  }


