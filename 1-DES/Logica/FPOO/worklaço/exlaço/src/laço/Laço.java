package la�o;

import java.util.Scanner;

public class La�o {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		int menu = 0;
		
		while( menu != 7) {
			System.out.println("1- Numeros pares\n2- Numeros impares\n3- insira 10 valores\n4- Fatora��o\n5- xerox\n6- Soma\n7 -sair");
			menu = entrada.nextInt();
			
			int[] numbers;
			switch (menu) {
			case 1:
				System.out.println("Digite um valor: ");
				int v1 = entrada.nextInt();
				
				System.out.println("Digite outro valor maior que o anterior: ");
				int v2 = entrada.nextInt();
				
				System.out.println("Os valores pares s�o: ");
				
				if (v1 % 2 != 0) {
					v1++;
				}
				
				for (int i = v1; i < v2; i +=2) {
				
					System.out.println(i);
				}
				
				break;
			case 2:
				System.out.println("Digite um valor: ");
				int i1 = entrada.nextInt();
				
				System.out.println("Digite outro valor maior que o anterior: ");
				int i2 = entrada.nextInt();
				
				System.out.println("Os valores impares s�o: ");
				
				if (i1 % 2 == 0) {
					i1++;
				}
				
				for (int i = i1; i < i2; i +=2) {
				
					System.out.println(i);
				}
				
			case 3:
				
	                int[] nums = new int[10];
	                
	                for (int i = 0; i < 10; i++) {
						nums[i] = entrada.nextInt();
					}
	                
	                int maior = nums[1];
	                int menor = nums[1];
	                
	                for (int i = 0; i < 10; i++) {
	                	if (nums[i] > maior) {
	                		maior = nums[i];
	                	}
	                	if (nums[i] < menor) {
	                		menor = nums[i];
	                	}
				}
	                System.out.println("Maior: " + maior);
	                System.out.println("Menor: " + menor);
	                
	                break;
			case 4:
				System.out.println("Digite um valor que queira fatorar: ");
				int f = entrada.nextInt();
				
				int valor1 = 1;
				
				for (int i = 1; i <= f; i++) {
					valor1 *= i;
					System.out.println("Resultado:" + valor1);
				}
				break;
				
			case 5:
				final double vl= 0.06;
				
				int cont = 1;
				
				for (int i = 0; i < 20; i++) {
					for (int j = 0; j < 10; j++) {
						System.out.printf("%d: %.2f         ", cont, vl*cont);
						cont++;
					}
					System.out.println();
				}
				
				break;
			case 6:
				
				break;
			case 7:
				System.out.println("Sair");
				break;
			default:
				System.out.println("Op��o inv�lida");
	        }
		}		
	}
}