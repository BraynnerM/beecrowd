const path = require("path");
const fs = require("fs");
const currentFile = path.dirname(process.argv[1]);

// Realiza a leitura das linhas no arquivo dev\stdin
var input = fs.readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

let T = parseFloat(lines[0]);
const N = [T];

for (let i = 1; i < 100; i++) {
    T = T / 2.0;
    N[i] = T;
}

for (let i = 0; i < N.length; i++) {
    console.log(`N[${i}] = ${N[i].toFixed(4)}`);
}

// Infelizmente o javascript tem problema de arrendamento entao o beecrowd só aceitou a solução em java.



/*

import java.io.IOException;
 
 * IMPORTANT: 
 *      O nome da classe deve ser "Main" para que a sua solução execute
 *      Class name must be "Main" for your solution to execute
 *      El nombre de la clase debe ser "Main" para que su solución ejecutar
 
import java.util.Scanner;
 
public class Main {
 
    public static void main(String[] args) throws IOException {
 
        Scanner sc = new Scanner(System.in);

		double[] N = new double[100];

		double X = sc.nextDouble();

		for (int i = 0; i < N.length; i++) {
			N[i] = X;
			X /= 2;
		}
		for(int i = 0; i < N.length; i++) System.out.printf("N[%d] = %.4f\n", i, N[i]);
		sc.close();
 
    }
 
}

*/