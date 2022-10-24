package visao;

import java.util.Scanner;

import modelo.Veiculo;

public class Menu {

	private static Scanner scan = new Scanner(System.in);
	private static Veiculo[] veiculos = new Veiculo[10];
	
	public static void main(String[] args) {
		
		int op = 0;
		
		while (op != 3) {
			System.out.println("Digite uma opção");
			System.out.println("1- Cadastrar veiculos\t2- Listar Veiculos");
			op = scan.nextInt();
			
			switch (op) {
			case 1:
				cadastrarVeiculo();
				break;
			case 2:
				listarVeiculo();
			break;
			default:
				System.out.println("Digita um valido ai");
				break;
			}
		}
	}
	private static void cadastrarVeiculo() {
		 for (int i = 0; i < veiculos.length; i++) {
			 if (veiculos[9] == null) {
				 if (veiculos[i] == null) {
					
				System.out.println("Digite a placa do veiculo");
				String placa = scan.next();
				
				System.out.println("Digite a marca do veiculo");
				String marca = scan.next();
				
				System.out.println("Digite o modelo do veiculo");
				String modelo = scan.next();
				
				System.out.println("Digite o ano do modelo");
				int anoModelo = scan.nextInt();
				
				System.out.println("Digite o ano de fabricação");
				int anoFabricacao = scan.nextInt();
				
				System.out.println("Digite a cor do veiculo");
				String cor = scan.next();
				
				veiculos[i] = new Veiculo(placa, marca, modelo, anoModelo, anoFabricacao, cor);
				
				break;
				}
			}else {
				System.out.println("Limite excedido");
			}
			
		}
		
	}
	private static void listarVeiculo() {
		System.out.println("placa\tmarca\tmodelo\tano do modelo\tano de fabricação\tcor");
		for (int i = 0; i < veiculos.length; i++) {
			if (veiculos[i] != null) {
				System.out.println(veiculos[i].paraString());
			}
		}
	}
}