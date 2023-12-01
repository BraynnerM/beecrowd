const path = require("path");
const fs = require("fs");
const currentFile = path.dirname(process.argv[1]);

var input = fs.readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");
if (lines[0].length < 10) {
    console.log("palavrinha");
}else{
    console.log("palavrao");
}