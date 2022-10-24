package agenda;

import java.util.Scanner;

import agenda.Contato;

public class Main {
	
	static Scanner s = new Scanner(System.in);
	public static void main(String[] args) {
		s = new Scanner(System.in);
		System.out.println("Quantos contatos deseja cadastrar?");
		int qtdeCont = s.nextInt();
		
		Contato[] contatos = new Contato[qtdeCont];
		
		for (int i = 0; i < contatos.length; i++) {
			
			System.out.println("DIgite o nome do Contato" + (i+1));
			String nome = s.nextLine();
			
			System.out.println("Digite a idade do Contato " + (i+1));
			int idade = s.nextInt();
			
			System.out.println("DIgite o telefone do Contato " + (i+1));
			String tel = s.nextLine();
			
			int id = i+1;
			
			contatos[i] = new Contato(), nome, idade, tel);	
			
		}
		int menu = 0;
		
		System.out.println("DIgite uma opção");
		System.out.println("1.Mostrar todos\t2.Buscar por Id\n3.Buscar por nome\t4.Buscar por Telefone\n5.Sai");
		menu = s.nextInt();
		
		while(menu != 5) {
			switch (menu) {
			case 1: 
				System.out.println("ID\tNome\tIdade\tTel");
				
				for (int i = 0; i < contatos.length; i++) {
					contatos[i].contatoTab();
				}
				
				break;
			case 2:
				
				System.out.println("Digite o ID");
				int id = s.nextInt();
				
				System.out.println("ID\tNome\tIdade\tTel");
				
				for (int i = 0; i < contatos.length; i++) {
					if(contatos[i].id == id) {
						contatos[i].contatoTab();
					}
				}
				break;
			case 3:
				System.out.println("Digite o Nome");
				String nome = s.nextLine();
				
				System.out.println("ID\tNome\tIdade\tTel");
				
				for (int i = 0; i < contatos.length; i++) {
					if(contatos[i].nome == nome) {
						contatos[i].contatoTab();
					}
				}
			case 4:
				System.out.println("Digite o Tel");
				String tel = s.nextLine();
				
				System.out.println("ID\tNome\tIdade\tTel");
				
				for (int i = 0; i < contatos.length; i++) {
					if(contatos[i].nome == tel) {
						contatos[i].contatoTab();
					}
				}
			case 5:
				System.out.println("Falou");
				break;
		default:
				
				System.out.println("Opção Inválida");
				break;
				
			}
		}
	}
}