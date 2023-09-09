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
let n1 = 2*(parseFloat(lines1[0]));
let n2 = 3*(parseFloat(lines1[1]));
let n3 = 4*(parseFloat(lines1[2]));
let n4 = 1*(parseFloat(lines1[3]));
let recuperacao =(parseFloat(lines[1]));
let media = ((n1+n2+n3+n4)/10)
media = ajuste(media, 1)

console.log("Media: "+ media.toFixed(1));
if (media>=7.0) {
    console.log("Aluno aprovado.");
} else if (media>=5.0) {
    console.log("Aluno em exame.")
    console.log("Nota do exame: "+ recuperacao.toFixed(1));
    const mediaFinal = (parseFloat((media+recuperacao)/2))  
    if ( mediaFinal >= 5.0) {
        console.log("Aluno aprovado.");
        console.log("Media final: "+ mediaFinal.toFixed(1));
    }else{
        console.log("Aluno reprovado.");        
    }
} else {
    console.log("Aluno reprovado.");
    
}

function ajuste(nr, casas) {
    const og = Math.pow(10, casas);
    return Math.trunc(nr * og) / og;
}