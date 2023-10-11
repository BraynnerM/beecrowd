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
let N = parseInt(lines[0]);
let resultado = 0;

for (let index = 1; index <= N; index++) {
    let valores = lines[index].split(" ");    
    let total = 0;    
    if (valores[0]%2 != 0) {
        resultado = parseInt(valores[0])        
        for (let index=1; index <= valores[1]; index++){
            total += resultado
            resultado += 2; 
        }
        console.log(total)
    }else{
        resultado = parseInt(valores[0])+1
        for (let index=1; index <= valores[1]; index++){
            total += resultado
            resultado += 2;            
        }
        console.log(total)
    }
}

