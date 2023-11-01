const path = require("path");
const fs = require("fs");
const currentFile = path.dirname(process.argv[1]);

var input = fs.readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");
lines = lines[0].split(" ");
let flutuacao_total = ((1 + lines[0] / 100) * (1 + lines[1] / 100) - 1) * 100
console.log(flutuacao_total.toFixed(6));