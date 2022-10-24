package visao;

import java.util.Scanner;

import modelo.Prato;

public class Menu {
	private static Scanner scan = new Scanner(System.in);
	private static Prato[] prato = new Prato[10];
	
	public static void main(String[] args) {
		
		int op = 0;
		
		while (op != 3) {
			System.out.println("Digite uma opção");
			System.out.println("1- Cadastrar Pratos\t2- Listar Pratos");
			op = scan.nextInt();
			
			switch (op) {
			case 1:
				cadastrarPrato();
				break;
			case 2:
				listarPrato();
			break;
			default:
				System.out.println("Digita um valido ai");
				break;
			}
		}
	}
	private static void cadastrarPrato() {
		 for (int i = 0; i < prato.length; i++) {
			 if (prato[9] == null) {
				 if (prato[i] == null) {
					
				System.out.println("Digite o codigo do prato");
				int comandoPrato = scan.nextInt();
				
				System.out.println("Digite o tipo do prato");
				String tipo = scan.next();
				
				System.out.println("Digite o nome do prato");
				String nome = scan.next();
				
				System.out.println("Digite a descrição do prato");
				String descricao = scan.next();
				
				System.out.println("Digite o preço");
				float preço = scan.nextFloat();
				
				prato[i] = new Prato(comandoPrato, tipo, nome, descricao, preço);
				
				break;
				}
			}else {
				System.out.println("Limite excedido");
			}
			
		}
		
	}
	private static void listarPrato() {
		System.out.println("codigo do prato\ttipo\tnome\tdescrição do prato\tPreço");
		for (int i = 0; i < prato.length; i++) {
			if (prato[i] != null) {
				System.out.println(prato[i].paraString());
			}
		}
	}
}