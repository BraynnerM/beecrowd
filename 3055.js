const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// Realiza a leitura das linhas no arquivo dev\stdin
const input = require('fs').readFileSync(path.join(currentFile, 'dev', 'stdin'), 'utf8');
const lines = input.split('\r\n');

let n1 = parseInt(lines[0]);
let m = parseInt(lines[1]);

console.log((m*2)-n1);