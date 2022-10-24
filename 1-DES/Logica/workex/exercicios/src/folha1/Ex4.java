 //Sabendo-se que a velocidade de cruzeiro de um avião 747-300 é de 900 km/h, faça um pro-grama que leia uma distância (km), calcule e apresente na tela, quanto tempo (horas) será ne-cessário para um 747-300 sobrevoar a distância informada
package folha1;

import java.util.Scanner;

public class Ex4 {

	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		
		System.out.println("Digite a distância: ");
		double dist = entrada.nextDouble();
		
		double tempo = dist / 900;
		
		System.out.println("O avião levará " + tempo + " hora(s) para sobrevoar " + dist + " Km ");

	}

}
