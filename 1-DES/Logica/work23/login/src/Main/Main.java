package Main;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	
	private static Scanner s = new Scanner(System.in);
	private static Arquivos arq = new Arquivos();
	public static void main(String[] args) {
		
		int menu = 0;
		
		do {
			System.out.println("Selecione uma opção:");
			System.out.println("1 - Cadastrar\t2 - Logar\t3 - Sair");
			menu = s.nextInt();
			
			switch (menu) {
			case 1:
				cadastro();
				break;
			case 2:
				login();
				break;
			default:
				break;
			}
			
		} while (menu != 3);
		
		
	}
	private static void cadastro() {
		System.out.println("Insira o nome do usuario a ser criado");
		String nome = s.next();
		
		System.out.println("Digite a senha do usuario");
		String senha = s.next();
		
		String data = nome + ";" + senha;
		
		arq.escrever(data, "Cadastro", true);
	}
	private static void login() {
		System.out.println("Digite seu nome: ");
		String nomeVerificar = s.next();
		
		
		System.out.println("Digite sua senha: ");
		String senhaVerificar = s.next();
		
		ArrayList<String> arqInfo = arq.ler("Cadastro");
		
		for (String login : arqInfo) {
			String[] temp = login.split(";");
			
			if (temp[0].equals(nomeVerificar) && temp[1].equals(senhaVerificar)) {
				System.out.println("Logado com sucesso");
			}else {
				System.out.println("Login ou senha incorretos");
			}
		}
	}
}