const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let total = parseInt(lines[0]);
let A =""
for (let index = 0; index < total; index++) {
    A += "a"
    
}
console.log("Feliz nat"+A+"l!");