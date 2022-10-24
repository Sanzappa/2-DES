package exercicios;

import java.util.Scanner;
public class INSS {
	
	public static Scanner entrada;
	public static void main(String[] args) {
		entrada = new Scanner(System.in);
		
		double desconto;
		float porcentagem;
		
		System.out.println("Digite o seu salário em reais: ");
		double salario = entrada.nextDouble();
		
		if(salario > 7087.22) {
			porcentagem = 0f;
			desconto = 992.21;
		}else if(salario > 3641.03) {
			porcentagem = 14f;
			desconto = salario * porcentagem / 100;
		}else if(salario > 2427.35) {
			porcentagem = 12f;
			desconto = salario * porcentagem / 100;
		}else if(salario > 1212.01) {
			porcentagem = 9f;
			desconto = salario * porcentagem / 100;
		}else {
			porcentagem = 7.5f;
			desconto = salario * porcentagem / 100;
		}
		
		if(porcentagem ==0f) {
			desconto = 992.21;
		}else {
			desconto = salario * porcentagem / 100;
		}
			
		System.out.printf(" A alíquota de desconto é igual a %.2f%%\nO desconto do INSS é R$%.2f\nSeu salário líquido é de R$%.2f", porcentagem, desconto, (salario-desconto));

	}

}
