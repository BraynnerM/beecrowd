const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

let T = parseInt(lines[0]);
const N = [];

    for (let i = 0; i < 1000; i++) {
      N.push(i % T);
    }

    for (let i = 0; i < N.length; i++) {
      console.log(`N[${i}] = ${N[i]}`);
    }