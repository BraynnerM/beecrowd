const path = require('path');
const currentFile = path.dirname(process.argv[1]);
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


let tempoDisp = parseInt(lines[0]);
let tempoNes = lines[1].split(" ");
if (tempoDisp >= (parseInt(tempoNes[0]) + parseInt(tempoNes[1]))) {
    console.log("Farei hoje!")
} else {
    console.log("Deixa para amanha!");
}
