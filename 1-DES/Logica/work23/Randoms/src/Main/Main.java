package Main;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Main {

	private static Random rand = new Random();
	private static Scanner s = new Scanner(System.in);
	private static Arquivos arq = new Arquivos();
	public static void main(String[] args) {
		
		int menu = 0;
		
		do {
			System.out.println("Digite uma opção: ");
			System.out.println("1- gerar numeros\t2 - listar numeros\n0 - sair");
			menu = s.nextInt();
			
			switch (menu) {
			case 1:
				gerarNumeros();
				break;
			case 2:
				listarNumeros();
				break;

			default:
				break;
			}
		}while(menu != 0);
		
	}
	private static void gerarNumeros() {
		ArrayList<Integer> random = new ArrayList<Integer>();
		
		for (int i = 0; i < 10; i++) {
			random.add(rand.nextInt(100));	
		}
		arq.escrever(random, "randola", true);
	}
	private static void listarNumeros() {
		ArrayList<Integer> infoFile = arq.ler("randola");
		infoFile.sort(null);
		System.out.println("ordem crescente");
		for (Integer ordemCrescente : infoFile) {
			System.out.println(ordemCrescente);
		}
	}
}