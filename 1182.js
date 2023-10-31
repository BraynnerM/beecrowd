const path = require("path");
const fs = require("fs");
const currentFile = path.dirname(process.argv[1]);

var input = fs.readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

function criarMatriz12x12() {
    const matriz = [];
    for (let i = 0; i < 12; i++) {
        matriz.push(Array(12).fill(0));
    }
    return matriz;
}

let selecionarColuna = parseInt(lines[0]);
let definirOperacao = lines[1];
let pos = 2;
let total = 0;

const minhaMatriz = criarMatriz12x12();
for (let i = 0; i < 12; i++) {
    for (let index = 0; index < 12; index++) {
        minhaMatriz[i][index] = parseInt(lines[pos])
        pos++         
    }
    
}

for (let i = 0; i < 12; i++) {    
    total += minhaMatriz[i][selecionarColuna];    
}

if (definirOperacao === "S") {
    console.log(total.toFixed(1));
}else{
    console.log((total/12).toFixed(1));
}