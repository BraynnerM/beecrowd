const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// Realiza a leitura das linhas no arquivo dev\stdin
const input = require('fs').readFileSync(path.join(currentFile, 'dev', 'stdin'), 'utf8');
const lines = input.split('\r\n');

let lines0 = lines[0].split(" ");
let N = parseInt(lines0[0]);
let M = parseInt(lines0[1]);
let frutas = [];
let texto = "";

for (let i = 1; i <= N; i++) {
    frutas.push(lines[i].toLowerCase());
}

for (let i = N + 1; i <= N + M; i++) {
    texto += lines[i].toLowerCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

for (let fruta of frutas) {
    if (texto.split(fruta).length > 1 || texto.split(reverseString(fruta)).length > 1) {
        console.log("Sheldon come a fruta " + fruta);
    } else {
        console.log("Sheldon detesta a fruta " + fruta);
    }
}
