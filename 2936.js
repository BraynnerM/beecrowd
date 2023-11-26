var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log(225+(lines[0]*300)+(lines[1]*1500)+(lines[2]*600)+(lines[3]*1000)+(lines[4]*150));
