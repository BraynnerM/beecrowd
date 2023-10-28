const path = require("path");
const fs = require("fs");
const currentFile = path.dirname(process.argv[1]);

var input = fs.readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");


let posicao = 0;
let arrayStr = lines[1].split(" ");
const arrayNum = arrayStr.map(numeroString => parseInt(numeroString));
let armazenarMenor =arrayNum[0] ;
arrayNum.map(menornum => {    
    if (menornum < armazenarMenor) {
        armazenarMenor = menornum
        posicao = arrayNum.indexOf(menornum)
    }
})

console.log("Menor valor: " + armazenarMenor);
console.log("Posicao: " + posicao);