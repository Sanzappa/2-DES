package exercicios;

import java.util.Scanner;

public class Exloop {
	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		int opcao = 0;
		while (opcao != 11) {
			System.out.println("Digite uma opção:");
			System.out.println("1-Programa1\t5-Programa5\t9-Programa9");
			System.out.println("2-Programa2\t6-Programa6\t10-Programa10");
			System.out.println("3-Programa3\t7-Programa7\t11-Sair");
			System.out.println("4-Programa4\t8-Programa8");
			opcao = leia.nextInt();
			switch (opcao) {
			case 1:
				for (int i = 10; i <=200; i++) {
					System.out.println(i);
					
				}
				break;
			case 2:
				for (int i = 200; i > 0; i--) {
					System.out.println(i);
				}
				break;
			case 3:
				System.out.println("Digite um valor inteiro:");
				int valor = leia.nextInt();
				for (int i = 0; i < valor; i++) {
					System.out.println(i);
				}
			break;
			case 4:
				System.out.println("Digite um valor inteiro: ");
				int n1 = leia.nextInt();
				
				System.out.println("Digite outro valor inteiro: ");
				int n2 = leia.nextInt();
				
				for (int i = n1; i <= n2; i++) {
					System.out.println(i);	
				}
				
				break;
			case 5:
				System.out.println("Digite um valor inteiro: ");
				int num1 = leia.nextInt();
				
				System.out.println("Digite outro valor inteiro: ");
				int num2 = leia.nextInt();
				
				for(int i = num1; i <=num2; i++)					
				if(i % 2 == 0) {
					System.out.println(i);
				}
				break;
			case 6:
				int soma = 0;
				for (int i = 0; i <= 100; i++){
					soma += i;
				}
				System.out.println(soma);
				break;
			case 7:
				int sum = 0;
				
				System.out.println("Digite um valor inteiro:");
				int valor1 = leia.nextInt();
				
				System.out.println("Digite outro valor inteiro");
				int valor2 = leia.nextInt();
				
				for (int i = valor1; i <= valor2; i++) {
				sum += i;
				}
				System.out.println(sum);
				
				break;
			case 8:
				int plus = 0;
				
				System.out.println("Digite um valor inteiro:");
				int vl1 = leia.nextInt();
				
				System.out.println("Digite outro valor inteiro");
				int vl2 = leia.nextInt();
				
				for(int i = vl1; i <=vl2; i++) {				
					if(i % 2 == 0) {
						plus += i;
					}
				}
				System.out.println(plus);
					break;
				case 9:
					
					System.out.println("Digite um valor inteiro:");
					int a = leia.nextInt();
					
					System.out.println("Digite outro valor inteiro");
					int b = leia.nextInt();
					
					System.out.println("Digite um valor inteiro:");
					int c = leia.nextInt();
					
					System.out.println("Digite outro valor inteiro");
					int d = leia.nextInt();
					
					System.out.println("Digite um valor inteiro:");
					int e = leia.nextInt();
					
					System.out.println("Digite outro valor inteiro");
					int f = leia.nextInt();
					
					System.out.println("Digite um valor inteiro:");
					int g = leia.nextInt();
					
					System.out.println("Digite outro valor inteiro");
					int h = leia.nextInt();
					
					System.out.println("Digite um valor inteiro:");
					int i = leia.nextInt();
					
					System.out.println("Digite outro valor inteiro");
					int j = leia.nextInt();
					
					System.out.println("Digite um valor inteiro:");
					int k = leia.nextInt();
					
					System.out.println("Digite outro valor inteiro");
					int l = leia.nextInt();
					
					System.out.println("Digite um valor inteiro:");
					int m = leia.nextInt();
					
					System.out.println("Digite outro valor inteiro");
					int n = leia.nextInt();
					
					System.out.println("Digite outro valor inteiro");
					int o = leia.nextInt();
					
					int mais = a + b + c + d + e + f + g + h + i + j + k + l + m + n + o;
					System.out.println(mais);
					
					break;
				case 10:
					
					for (int cont = 11; cont <= 250; cont++) {
						if (cont % 2 == 0) {
							
							
							System.out.println(cont);
						}
					}
					
					break;
				case 11:
					System.out.println("Até logo: ");
					break;
				default:
					System.out.println("Opção invalida. ");
					break;
			}
			}
		}
		
		

	}


