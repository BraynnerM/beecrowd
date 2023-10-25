const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

function calcularFibonacci(n) {
  const sequencia = [0, 1];

  for (let i = 2; i <= n; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }

  return sequencia[n];
}

const t = parseInt(lines[0]);

for (let i = 1; i <= t; i++) {
  const n = parseInt(lines[i]);
  const resultado = calcularFibonacci(n);
  console.log("Fib(" + n + ") = " + resultado);
}
