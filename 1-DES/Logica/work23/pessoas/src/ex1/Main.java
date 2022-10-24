package ex1;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

public class Main {
	
	private static Scanner s = new Scanner(System.in);
	private static Arquivo arq = new Arquivo();
	
	public static void main(String[] args) throws ParseException {
		int menu = 0;
		
		do {
			System.out.println("1 - Cadastrar pessoa\t2 - listar pessoas\t3 - Buscar Pessoa\t0 - Sair ");
			menu = s.nextInt();			
			
			switch (menu) {
			case 1: 
				System.out.println("Digite o nome da pessoa: ");
				String nome = s.next();
				
				System.out.println("Digite a data de nascimento da pessoa: ");
				String date = s.next();
				
				String data = nome + ";" + date;
				
				arq.escrever(data, "Pessoas", true);
				
				break;
			case 2:
				ArrayList<String> pessoas = arq.ler("pessoas");
				
				for (String pessoa : pessoas) {
					String[] temp = pessoa.split(";");
					System.out.println("Nome " + temp[0]);
					
					Date nasc = new SimpleDateFormat("dd/MM/yyyy").parse(temp[1]);
					
					Date agora = new Date();
					
					int idade = agora.getYear() - nasc.getYear();
					
					System.out.println("Idade " + idade);
					System.out.println("/-/-/-/-/-/-/-/-/-/-/-/-/");
					
				}
				
				break;
			case 3:
				ArrayList<String> arqInfo = arq.ler("pessoas");
				
				System.out.println("Digite a pessoa que deseja buscar");
				String busca = s.next();
				
				for (String pessoa : arqInfo) {
					String[] temp = pessoa.split(";");
					
					if (temp[0].toLowerCase().contains(busca.toLowerCase())) {
						System.out.println("Nome " + temp[0]);
						System.out.println("Idade " + temp[1]);
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