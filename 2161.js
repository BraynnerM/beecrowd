const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

function r10(n){
    if (n == 0) {
        return 6
    }
    x = 6+1/r10(n-1)
    return x
}
n = parseInt(lines[0])
x = r10(n)-3
console.log(x.toFixed(10));