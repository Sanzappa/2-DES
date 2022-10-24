package modelo;

import java.util.Scanner;

public class Vetor {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int comprimento = 3;
		
		String[] nomes = new String[comprimento];
		int[] idades = new int[comprimento];
		
		for(int i = 0; i < 3; i++) {
			System.out.print("Nome[" + i +"]: ");
			nomes[i] = scan.next();
			
			System.out.print("Idade[" + i + "]: ");
			idades[i] = scan.nextInt();
			
		}
		
		for (int i = 0; i < comprimento; i++) {
			if (idades[i] < 10) {
				System.out.println(nomes[i] + " criança.");
			}else if(idades[i] < 20) {
				System.out.println(nomes[i] + " jovem.");
			}else {
				System.out.println(nomes[i] + " veio.");
			}
		}

	}

}
