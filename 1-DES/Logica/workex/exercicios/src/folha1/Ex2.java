 //Desenvolva um programa que leia a velocidade de um carro (km/h) e a distância(Km) a ser percorrida (km) por ele. Calcule e apresente na tela, quanto tempo (horas) será necessário para o carro percorrer a distância informada

package folha1;

import java.util.Scanner;

public class Ex2 {

	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		
		System.out.println("Digite a velocidade do carro em Km/h: ");
		double vel = entrada.nextDouble();
		
		System.out.println("Digite a distância a percorrer em Km: ");
		double dist = entrada.nextDouble();
		
		double tempo = dist / vel;
		
		System.out.printf("Um carro a %.2f Km/h levará %.2f horas para percorrer %.2f Km", vel, tempo, dist);


	}

}
