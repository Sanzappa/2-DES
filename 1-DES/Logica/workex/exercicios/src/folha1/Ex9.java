//Faça um programa que leia dois valores inteiros, some os valores lidos e apresente o resul-tado na tela
package folha1;

import java.util.Scanner;

public class Ex9 {

	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		
		System.out.println("Digite um valor inteiro: ");
		int vl1 = entrada.nextInt();
		
		System.out.println("Digite outro valor inteiro: ");
		int vl2 = entrada.nextInt();
		
		System.out.printf("%d + %d = %d", vl1, vl2, vl1 + vl2);
		
	}

}
