package Main;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	private static Scanner s = new Scanner(System.in);
	private static Arquivos arq = new Arquivos();
	public static void main(String[] args) {
		
		int menu = 0;
		
		do {
			System.out.println("Digite uma opção: ");
			System.out.println("1- Cadastre um aluno\t2 - listar alunos\t0 - sair");
			 menu = s.nextInt();
			
			 switch (menu) {
			case 1:
				cadastrarAluno();
				break;
			case 2:
				listarAlunos();
				break;
				
			default:
				break;
			}
		}while(menu != 0);
		
	}
	private static void cadastrarAluno() {
		System.out.println("Digite o nome do aluno que deseja cadastrar: ");
		String nome = s.next();
		
		System.out.println("Digite uma nota");
		String nota1 = s.next();
		
		System.out.println("Digite outra nota");
		String nota2 = s.next();
		
		System.out.println("Digite mais uma ultima nota");
		String nota3 = s.next();
		
		String aluno = nome + ";" + nota1 + ";" + nota2 + ";" + nota3;
		
		arq.escrever(aluno, "alunos", true);
	}
	private static void listarAlunos() {
	
		ArrayList<String> alunos = arq.ler("alunos");
		
		for (String aluno : alunos) {
			String[] temp = aluno.split(";");
			System.out.println("Nome: " + temp[0]);
				
			double media = (Double.parseDouble(temp[1]) + Double.parseDouble(temp[2]) + Double.parseDouble(temp[3])) / 3;
			
			System.out.println("A media do aluno é: "+ media);
		}
	}
}