 //Desenvolva um programa que leia três variáveis (a, b, c) e resolva a expressão: ( a + b ) / c
package folha1;

import java.util.Scanner;

public class Ex1 {

	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		
		System.out.print("Digite um valor: ");
		double a = entrada.nextDouble();
		
		System.out.print("\nDigite um valor: ");
		double b = entrada.nextDouble();
		
		System.out.print("\nDigite um valor: ");
		double c = entrada.nextDouble();
		
		double result = (a+b)/c;
		
		System.out.println("O resultado é: "+ result);
		

	}

}
