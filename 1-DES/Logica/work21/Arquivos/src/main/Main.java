package main;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
	Arquivo arq = new Arquivo();
	Scanner input = new Scanner(System.in);
	
		int opcao = 0;
		
		do {
			System.out.println("1 - cadastrar");
			System.out.println("2 - listar");
			System.out.println("0 - sair");
			opcao = input.nextInt();
			input.nextLine();
			
			switch(opcao) {
			case 1:
				System.out.println("Informe o seu nome: ");
				String nome = input.nextLine();
				
				System.out.println("Informe sua idade : ");
				String idade = input.next();
				
				System.out.println("Informe sua cidade : ");
				String cidade = input.next();
				
				String data = nome + ";" + idade + ";" + cidade;
				
				arq.escrever(data, "Pessoas", true);
				break;
			case 2:
				ArrayList<String> intoFile = arq.ler("Pessoas");
				
				System.out.println("Informe o nome que deseja localizar : ");
				String busca = input.nextLine();
				
				for (String linha : intoFile) {
					String[] temp = linha.split(";");
					if(temp[0].toLowerCase().contains(busca.toLowerCase()))
						System.out.println("Nome : " + temp[0]);
						System.out.println("Idade : " + temp[1]);
						System.out.println("Cidade : " + temp[2]);
				}
				break;
			case 0:
				System.out.println("inté");
				break;
			}
			
		}while(opcao != 0);
	}
}