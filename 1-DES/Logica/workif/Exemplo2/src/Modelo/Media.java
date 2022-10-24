package Modelo;

import java.util.Scanner;

public class Media {
	
	public static Scanner entrada;
	
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		int n1, n2, result;
		
		System.out.print("Digite uma nota");
		n1 = entrada.nextInt();
		System.out.print("Digite outra nota");
		n2 = entrada.nextInt();
		
		result = (n1 + n2)/2;
		
		System.out.println("A media dos dois valores é "+result);
		
		if(result > 5) {
			System.out.println("Aprovado");
		}else {
			System.out.println("Reprovado");
		}
			
		}
	}		