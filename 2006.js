const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// Realiza a leitura das linhas no arquivo dev\stdin
const input = require('fs').readFileSync(path.join(currentFile, 'dev', 'stdin'), 'utf8');
const lines = input.split('\r\n');

let chaCorreto = parseInt(lines[0]);
let respostas = lines[1].split(' ');
let cont = 0;
console.log(respostas);
for (let i = 0; i < respostas.length; i++) {
    if (chaCorreto == respostas[i]) {
        cont++
    }    
}
console.log(cont);