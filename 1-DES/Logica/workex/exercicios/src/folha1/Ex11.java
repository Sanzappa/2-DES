//Desenvolva um programa que leia três variáveis (a, b, c) que representam os lados de um tri-ângulo e retorne o tipo de triângulo, 
//se todos os lados são iguais o triângulo é equilátero,
//se todos os lados forem diferentes o triângulo é escaleno, e se apenas dois lados forem iguais e um diferen-te o triangulo é isósceles
package folha1;

import java.util.Scanner;

public class Ex11 {

	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		
		System.out.println("Digite o valor do primeiro lado do triangulo: ");
		double a = entrada.nextDouble();
		
		System.out.println("Digite o valor do segundo lado do triangulo: ");
		double b = entrada.nextDouble();
		
		System.out.println("Digite o valor do terceiro lado do triangulo: ");
		double c = entrada.nextDouble();
		
		if (a == b && a == c) {
			System.out.println("O triangulo é Equilátero");
		}else if (a == b|| a == c|| b == c) {
			System.out.println("Neste caso o triangulo é Isósceles");
		}else {
			System.out.println("O triangulo é Escaleno");
			
			
		}
	}

}
