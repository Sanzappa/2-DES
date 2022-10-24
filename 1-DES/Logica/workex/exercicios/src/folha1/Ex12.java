//Desenvolva um programa que receba o valor do salário como entrada e calcule quanto será o desconto de IRRF
//(Imposto de renda retido na fonte) conforme a tabela a seguir
package folha1;

import java.util.Scanner;

public class Ex12 {
	
	public static Scanner entrada;
	public static void main(String[] args) {
		entrada =  new Scanner(System.in);
		
		System.out.println("Digite o valor total do seu salário");
		double sal = entrada.nextDouble();
		
		double porc, desc;
		
		if (sal > 4664.68) {
			 porc = 27.5;
		}else if (sal > 3751.05) {
			 porc = 22.5;
		}else if (sal > 2826.65 ) {
			 porc = 15;
		}else if  (sal > 1903.98) {
			 porc = 7.5;
		}else {
			 porc = 0;
			
		}
		if(sal > 4664.68) {
			desc = 869.36;
		}else {
			desc = sal * porc / 100;

			System.out.printf("O desconto será de R$ %.2f", desc);
		}
	}

}
