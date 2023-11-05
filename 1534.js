const path = require('path');
const fs = require('fs');
const inputFilePath = path.dirname(process.argv[1])
const input = fs.readFileSync(inputFilePath + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');
var prompt = function(texto) { return lines.shift();};
var size = parseInt(prompt());

while (size > 0) {
  var M = [];

  for (let i = 0; i < size; i++) {
    let line = [];

    for (let n = 0; n < size; n++) {
      let aux = 0;
      if (i == n) {
        aux = 2;
      }
      if (i + n + 1 == size) {
        aux = 1;
      }

      line.push(3 - aux);
    }
    console.log(line.join(""));
  }
  size = parseInt(prompt());
}
