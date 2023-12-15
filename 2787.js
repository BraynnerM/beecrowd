const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');
let L = parseInt(lines[0])
let C = parseInt(lines[1])

if ((L + C) % 2 === 0) {
    console.log(1);
} else {
    0
    console.log(0);
}