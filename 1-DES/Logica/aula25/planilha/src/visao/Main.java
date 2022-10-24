package visao;

import java.io.IOException;
import java.util.Scanner;

import controle.Processa;

public class Main {
	
	public static Scanner s = new Scanner(System.in);
	public static void main(String[] args) throws IOException {
	
		Processa.carregar();
		
		int menu = 0;
		
		System.out.println("\t1- soma\t2- mult\t3- subtração\t4- div\t5- Sair");
		menu = s.nextInt();
			
			Processa.saida(menu);
	}
}