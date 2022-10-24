package Modelo;

import java.util.Scanner;

public class Bhaskara {
	
	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);

		int a, b, c;
		
		double delta, r1, r2;
		
		System.out.println("Insira um valor para a:");
		a = entrada.nextInt();
		
		System.out.println("Insira um valor para b:");
		b = entrada.nextInt();
		
		System.out.println("Insira um valor para c:");
		c = entrada.nextInt();
		
		delta = (double) (b*b-4*a*c);
		
		if (delta < 0) {
			System.out.println("Não possui raizes reais");
		} else {
			r1 = (-b + Math.sqrt(delta))/(2*a);
			
			r2 = (-b - Math.sqrt(delta))/(2*a);
			
			System.out.printf("As raizes da equação são %.4f e %.4f ",r1 ,r2);
		}
		
	}

}
