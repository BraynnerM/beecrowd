const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');
lines = parseInt(lines)
if (lines === 0 ){
    console.log("E")
}else if (lines > 0 && lines < 36) {
    console.log("D");
}else if (lines > 35 && lines < 61) {
    console.log("C");
}else if (lines > 60 && lines < 86) {
    console.log("B");
}else if (lines > 85 && lines < 101) {
    console.log("A");
}