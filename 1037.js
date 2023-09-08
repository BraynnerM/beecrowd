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
let valor = (lines[0]);

if (valor <=25.0000 && valor >=0){
    console.log("Intervalo [0,25]")
}else if (valor <=50.0000 && valor >=25.0001){
    console.log("Intervalo (25,50]")
}else if (valor <=75.0000 && valor >=50.0001){
    console.log("Intervalo (50,75]")
}else if (valor <=100.0000 && valor >=75.0001){
    console.log("Intervalo (75,100]")
}else{
    console.log("Fora de intervalo")
}