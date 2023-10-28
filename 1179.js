const path = require("path");
const fs = require("fs");
const currentFile = path.dirname(process.argv[1]);

var input = fs.readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

let par = new Array(5);
let impar = new Array(5);
let X, contPar = 0, contImpar = 0;

for (let i = 0; i < 15; i++) {
  X = parseInt(lines[i]);

  if (X % 2 === 0) {
    par[contPar] = X;
    contPar++;
  } else {
    impar[contImpar] = X;
    contImpar++;
  }

  if (contPar === 5) {
    for (let j = 0; j < par.length; j++) {
      console.log(`par[${j}] = ${par[j]}`);
      par[j] = undefined;
    }
    contPar = 0;
  } else if (contImpar === 5) {
    for (let j = 0; j < impar.length; j++) {
      console.log(`impar[${j}] = ${impar[j]}`);
      impar[j] = undefined;
    }
    contImpar = 0;
  }
}

for (let i = 0; i < contImpar; i++) {
  console.log(`impar[${i}] = ${impar[i]}`);
}

for (let i = 0; i < contPar; i++) {
  console.log(`par[${i}] = ${par[i]}`);
}
