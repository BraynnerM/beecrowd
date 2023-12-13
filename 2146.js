var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
 for (let i = 0; i<(lines.length-1);i++){
    console.log(lines[i]-1)    
 }
 
