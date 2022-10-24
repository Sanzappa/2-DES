//Desenvolva um programa que leia o raio (cm) e a altura (cm) de um cilindro. Calcule e mostre a área (cm2) e o volume (cm3) do cilindro
package folha1;

import java.util.Scanner;

public class Ex6 {

	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		
		double PI = 3.14;
				
		System.out.println("Digite o raio do cilindro (cm): ");
		double r = entrada.nextDouble();
		
		System.out.println("Digite a altura do cilindro (cm): ");
		double h = entrada.nextDouble();
		
		double a = 2*(PI*(r*r)+ 2*PI*r*h);
		
		double v = h *(PI*(r*r));
		
		System.out.printf("A área do cilindro é igual a %.2f cm² e o volume é igual a %.2f cm³", a, v);
		
				
				
	}

}
