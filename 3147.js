var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
lines = lines[0].split(" ")

let H = parseInt(lines[0]);
let E = parseInt(lines[1]);
let A = parseInt(lines[2]);
let O = parseInt(lines[3]);
let W = parseInt(lines[4]);
let X = parseInt(lines[5]);

if ((H+E+A+X)>=(O+W)) {
    console.log("Middle-earth is safe.")
}else{
    console.log("Sauron has returned.")
}
