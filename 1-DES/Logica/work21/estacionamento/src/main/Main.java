package main;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	
	private static Scanner s = new Scanner(System.in);
	private static Arquivo arq = new Arquivo();
	
	public static void main(String[] args) {
		int menu = 0;
		
		do {
			System.out.println("1 - Cadastrar Carro\t2 - listar carros\t3 - Buscar Carro\t0 - Sair ");
			menu = s.nextInt();			
			
			switch (menu) {
			case 1: 
				System.out.println("Digite a placa do carro");
				String placa = s.next();
				
				System.out.println("Digite a marca");
				String marca = s.next();
				
				System.out.println("Digite o modelo do carro");
				String modelo = s.next();
				
				System.out.println("Digite a cor do carro");
				String cor = s.next();
				
				String data = placa + ";" + marca + ";" + modelo + ";" + cor + ";";
				
				arq.escrever(data, "Carros", true);
				
				break;
			case 2:
				ArrayList<String> carros = arq.ler("carros");
				
				for (String carro : carros) {
					String[] temp = carro.split(";");
					System.out.println("Placa " + temp[0]);
					System.out.println("Marca " + temp[1]);
					System.out.println("modelo " + temp[2]);
					System.out.println("cor " + temp[3]);
					System.out.println("/-/-/-/-/-/-/-/-/-/-/-/-/");
				}
				
				break;
			case 3:
				ArrayList<String> arqInfo = arq.ler("carros");
				
				System.out.println("Digite a placa que deseja buscar");
				String busca = s.next();
				
				for (String carro : arqInfo) {
					String[] temp = carro.split(";");
					
					if (temp[0].toLowerCase().contains(busca.toLowerCase())) {
						System.out.println("Placa " + temp[0]);
						System.out.println("Marca " + temp[1]);
						System.out.println("modelo " + temp[2]);
						System.out.println("cor " + temp[3]);
						System.out.println("/-/-/-/-/-/-/-/-/-/-/-/-/");
					}
					
					
				}
				break;
			case 0:
				System.out.println("falo paizin");
				break;
			default:
				System.out.println("IHHHHH errou ae fidamae");
				break;
			}
		}while(menu != 0);
			
	}

}
