 //Desenvolva um programa que leia um número ”n” inteiro, positivo e diferente de zero e apresente na tela: n – 1, e também n + 1
package folha1;

import java.util.Scanner;

public class Ex3 {
	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		int n = 0;
		
		while(n == 0 ||n < 0) {
			System.out.println("Digite um número inteiro maior que 0");
			n = entrada.nextInt();
			
			if(n == 0 || n < 0) {
				System.out.println("Valor inválido");
			}
		}
		
		System.out.printf("%d - 1 = %d\n%d + 1 = %d", n, (n - 1), n, (n+1));

	}

}
