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
let palavra1 = lines[0];
let palavra2 = lines[1];
let palavra3 = lines[2];

if (palavra1 == "vertebrado") {
    if (palavra2 == "ave") {
        if (palavra3 == "carnivoro") {
            console.log("aguia");
        }else if (palavra3 == "onivoro") {
            console.log("pomba");
        }
    }else if (palavra2 == "mamifero") {
        if (palavra3 == "herbivoro") {
            console.log("vaca");
        }else if (palavra3 == "onivoro") {
            console.log("homem");
        }
    }
} else if (palavra1 == "invertebrado") {
    if (palavra2 == "inseto") {
        if (palavra3 == "hematofago") {
            console.log("pulga");
        }else if (palavra3 == "herbivoro") {
            console.log("lagarta");
        }
    }else if (palavra2 == "anelideo") {
        if (palavra3 == "hematofago") {
            console.log("sanguessuga");
        }else if (palavra3 == "onivoro") {
            console.log("minhoca");
        }
    }
}