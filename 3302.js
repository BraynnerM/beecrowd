const path = require("path");
const fs = require("fs");
const currentFile = path.dirname(process.argv[1]);

var input = fs.readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

for (let i = 1; i <= lines[0]; i++) {
    console.log("resposta "+i+": "+lines[i]);    
}
