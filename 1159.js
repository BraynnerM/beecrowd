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
let N;
let index = 0;
let somatoria = 0;
do {
    N = parseInt(lines[index]);
    if (N === 0) {
        break
    }
    index++
    if (N % 2 === 0) {
        somatoria = 0 
        for (let i = 0; i < 5; i++) {
            somatoria += N
            N += 2;
        }
        console.log(somatoria);
    }else{  
        somatoria = 0      
        N += 1;
        for (let i = 0; i < 5; i++) {
            somatoria += N
            N += 2;            
        }
        console.log(somatoria);

    }
} while (true)
