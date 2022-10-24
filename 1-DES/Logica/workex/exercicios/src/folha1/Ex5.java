 //Um caminhão consegue transportar 18 toneladas de laranjas em uma viagem que faz entre a fazenda
//e a fábrica de suco de laranja. Um alqueire de terra produz em média 250 toneladas de laranjas.
//Faça um programa que leia quantos caminhões e quantos alqueires uma fazenda pro-dutora de laranjas possui,
//calcule e apresente na tela quantas viagens de caminhão serão necessárias para transportar toda a colheita de laranjas
package folha1;

import java.util.Scanner;

public class Ex5 {

	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		
		System.out.println("Digite a quantidade de caminhões: ");
		int cam = entrada.nextInt();
		
		System.out.println("Digite a quantidade de alqueires");
		int alq = entrada.nextInt();
		
		int viagens = (int) Math.ceil(((250*alq)/18)/cam);
		
		System.out.println("Serão necessárias " + viagens + " viagens");
		
		
		
	}

}
