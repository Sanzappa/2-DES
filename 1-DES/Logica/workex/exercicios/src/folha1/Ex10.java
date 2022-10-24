//Pedra mineira é um tipo de piso muito utilizado para revestir o chão em volta de piscinas,
//dez quilos de pedra mineira custam R$ 130,00 e revestem uma área de 3,7 m2.
//Desenvolva um pro-grama que leia a área total (m2) a ser revestida, calcule e apresente na tela
//o total de quilos de pedra mineira que serão necessários para o revestimento e o seu custo total (R$).
//O programa deverá apresentar os valores monetários formatados com duas casas decimais
package folha1;

import java.util.Scanner;

public class Ex10 {

	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		
		System.out.println("Digite a área total a ser revestida (m²): ");
		double a = entrada.nextDouble();
		
		double custo = (a/3.7)*130;
		double peso = (a/3.7)*10;
		
		System.out.printf("Serão usados %.2f Kg de pedra, custando R$%.2f", peso, custo);
	}

}
