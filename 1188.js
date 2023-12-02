const path = require("path");
const fs = require("fs");
const currentFile = path.dirname(process.argv[1]);

var input = fs.readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

let matrix = [[]];
let operacao = lines[0];
let sum = 0;
let aux1 = 11;
let aux2 = 1;
let lineCounter = 1;
let count = 0;

for (let i = 0; i < 12; i++) {
    matrix[i] = []
    for (let j = 0; j < 12; j++) {
        matrix[i][j] = parseInt(lines[lineCounter]);
        lineCounter++
    }
}

for (i = 11; i > 6; i--) {
    for (j = aux2; j < aux1; j++) {
        sum += matrix[i][j];
        count++;
    }
    aux1--
    aux2++
}
if (operacao == 'S') {
    console.log((sum).toFixed(1));
} else {
    console.log((sum / count).toFixed(1));
}