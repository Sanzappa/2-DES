package modelo;

import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class Aleatorios {

	public static Scanner entrada;	
	
	public static void main(String[] args) throws IOException{
		entrada = new Scanner(System.in);
		
		int menu = 0;
		
		while(menu != 4) {
			System.out.println("1- Numeros Inteiros\n2- Numeros Reais\n3- Nomes\n4- Sair");
			menu = entrada.nextInt();
			switch(menu) {
			case 1:
				GerarInteiro();
				break;
			case 2:
				GerarReal();
				break;
			case 3:
				GerarNome();
				break;
			case 4:
				System.out.println("Obrigado!");
				break;
			default:
				System.out.println("Opção Inválida");
				break;
			}
		}
	}
	public static void GerarInteiro() {
		entrada = new Scanner(System.in);
		Random rand = new Random();
		
		System.out.print("Digite quantos numeros deseja gerar: ");
		int qntd = entrada.nextInt();
		
		int[] numeros = new int[qntd];
		
		for(int i = 0; i < qntd; i++) {
			numeros[i] = rand.nextInt(100);
			System.out.println(numeros[i]);
		}
		
	}
	public static void GerarReal() {
		entrada = new Scanner(System.in);
		Random rand = new Random();
		
		System.out.println("Digite quantos numeros deseja gerar, até 12 ");
		int qntd = entrada.nextInt();
		
		double[] numeros = new double[qntd];
		
		for(int i = 0; i < qntd; i++) {
			numeros[i] = rand.nextDouble() * 100;
			System.out.printf("%.2f\n", numeros[i]);
		}
	}
	public static void GerarNome() {
		entrada = new Scanner(System.in);
		Random rand = new Random();
		
		System.out.println("Digite quantos nomes você deseja ");
		int qntd = entrada.nextInt();
		
		String [] nomes = {"João", "Maria", "José", "Ana", "Carlos", "Pedro", "Leticia", "Caio", "Bruno", "Bruna", "Guilherme", "Julia"};
				
		for(int i = 0; i < qntd; i++) {
			int a = rand.nextInt(nomes.length);
			System.out.println(nomes[a]);
		}
	}
}		