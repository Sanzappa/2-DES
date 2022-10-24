//Faça um programa que leia dois valores, 
//divida o primeiro valor digitado pelo segundo valor digitado e informe para o usuário qual será o valor de resto dessa divisão
package folha1;

import java.util.Scanner;

public class Ex8 {
	
	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);	
		
		System.out.println("Digite um valor: ");
		double vl1 = entrada.nextDouble();
		
		System.out.println("Digite outro valor ");
		double vl2 = entrada.nextDouble();
		
		double resto  = vl1%vl2;
		
		System.out.printf("O resto da divisão é igual a %.2f", resto);
		
	}

}
