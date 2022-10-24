//Um laboratório de Física está estudando barras de calcário para Construção Civil, e precisa saber a densidade de cada barra.
//Faça um programa para ajudá-los. (Dado: densidade = massa / volume)
package folha1;

import java.util.Scanner;

public class Ex7 {

	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		System.out.println("Digite o volume da barra");
		double v = entrada.nextDouble();
		
		System.out.println("Digite a massa da barra");
		double m = entrada.nextDouble();
		
		double dens = m/v;
		
		System.out.printf("A densidade da barra é igual a %.2f ", dens);
	}

}
