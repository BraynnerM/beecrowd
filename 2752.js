let frase = "AMO FAZER EXERCICIO NO URI";

console.log("<" + frase + ">");
console.log("<" + frase.padStart(30) + ">");
console.log("<" + frase.substr(0, 20) + ">");
console.log("<" + frase.padEnd(20) + ">");
console.log("<" + frase.padEnd(30) + ">");
console.log("<" + frase.padStart(0).substr(0, 30) + ">");
console.log("<" + frase.padStart(36).substr(0, 30) + ">");
console.log("<" + frase.padEnd(1).substr(0, 20) + "          >");