package visao;

import java.util.Scanner;
import modelo.Notas;
import modelo.Aluno;

import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Main {

	static Aluno[] aluno = new Aluno[10];

	static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

	public static void main(String[] args) throws ParseException {

		Scanner scan = new Scanner(System.in);

		int menu = 0;
		while (menu != 8) {
			System.out.println(
					"1- Cadastrar Alunos\n2- Cadastrar Notas\n3- Listar Todos os Alunos\n4- Listar Todas as Notas\n5- Obter os Dados de um Aluno Específico\n6- Listar Alunos Aprovados\n7- Listar Alunos Reprovados\n8- Sair ");

			menu = scan.nextInt();
			switch (menu) {
			case 1:
				cadastrarAlunos();
				break;
			case 2:
				cadastrarNotas();
				break;
			case 3:
				listarAlunos();
				break;
			case 4:
				listarNotas();
				break;
			case 5:
				int num = 0;

				Aluno aluno = null;

				while (num != 1 && num != 2) {
					System.out.println("Deseja buscar por \n1-RA\n2-Nome");
					num = scan.nextInt();

					switch (num) {
					case 1:
						System.out.println("Digite o RA: ");
						int id = scan.nextInt();
						aluno = obterDados(id);
						break;
					case 2:
						System.out.println("Digite o nome:");
						String nome = scan.next();
						aluno = obterDados(nome);
						break;
					default:
						System.out.println("Limite excedido(2)");
						break;
					}
				}
				if(aluno != null) {
				System.out.println("\nRA\tNome\tNascimento\tIdade");
				System.out.println(aluno.ra + "\t" + aluno.nome + "\t" + new SimpleDateFormat("dd/MM/yyyy").format(aluno.nascimentoAluno) + "\t" + aluno.idadeDoItem()	+ "\t" + aluno.obterConceito());
				}else {
					System.out.println("Aluno nao encontrado");
				}
				break;
			case 6:
				listarAprovados();
				break;
			case 7:
				listarReprovados();
				break;
			case 8:
				System.out.println("Até a proxima");
				break;
			default:
				System.out.println("Digite um numero dentro dos parametros.");
				break;
			}
		}
	}

	public static void cadastrarAlunos() throws ParseException {

		Scanner scan = new Scanner(System.in);
		int qtdAlunos = 0;
		do {
			System.out.println("Quantos alunos deseja cadastrar?");
			qtdAlunos = scan.nextInt();

			for (int i = 0; i < qtdAlunos; i++) {
				aluno[i] = new Aluno();
				System.out.println("Digite o nome do aluno");
				aluno[i].nome = scan.next();
				System.out.println("Digite o ra do aluno");
				aluno[i].ra = scan.nextInt();
				System.out.println("Digite o nascimento do aluno");
				aluno[i].nascimentoAluno = df.parse(scan.next());
				System.out.println("Aluno cadastrado");
			}

			if (qtdAlunos > 10) {
				System.out.println("Acima do limite(maximo de 10)");
			}
		} while (qtdAlunos > 10);
	}

	public static void cadastrarNotas() {
		Scanner scan = new Scanner(System.in);
		int qtdNotas = 0;

		System.out.println("Digite o RA do aluno que deseja cadastrar");
		int ra = scan.nextInt();

		for (int i = 0; i < aluno.length; i++) {
			if (aluno[i] != null) {
				if (aluno[i].ra == ra) {
					Notas[] notas = aluno[i].notas;
					System.out.println("ALUNO: " + aluno[i].nome);
					do {
						System.out.println("Quantas notas deseja cadastrar? (max: 4)");
						qtdNotas = scan.nextInt();

						if (qtdNotas > 4) {
							System.out.println("Ta torto ai mano(limite 4)");

						} else {
							for (int i2 = 0; i2 < qtdNotas; i2++) {
								for (int j = 0; j < 4; j++) {
									if (notas[j] == null) {
										System.out.println("Digite á matéria\tnota-1\tnota-2\tnota-3");
										String componente = scan.next();

										float[] nota = new float[3];

										for (int k2 = 0; k2 < nota.length; k2++) {
											nota[k2] = scan.nextFloat();
										}

										aluno[i].notas[j] = new Notas(componente, nota);

										break;
									}
								}
							}
						}

					} while (qtdNotas > 4);
				} else if (i == 9) {
					System.out.println("RA não encontrado");
					break;
				}
			}
		}

	}

	public static void listarAlunos() {
		System.out.println("Nome\t        RA\tData de nascimento\tIdade");
		for (int i = 0; i < aluno.length; i++) {
			if (aluno[i] != null) {
				System.out.println(aluno[i].paraString());
			}
		}
	}

	public static void listarNotas() {
		for (int i = 0; i < aluno.length; i++) {
			if (aluno[i] != null) {

				System.out.println(aluno[i].nome);

				System.out.println("\tComp.\tNota 1\tNota 2\tNota 3\tMédia\n");
				for (int j = 0; j < aluno[i].notas.length; j++) {
					if (aluno[i].notas[j] != null) {
						System.out.print("\t" + aluno[i].notas[j].componente);
						for (int j2 = 0; j2 < aluno[i].notas[j].nota.length; j2++) {
							System.out.print("\t" + aluno[i].notas[j].nota[j2]);
						}
						if (aluno[i].notas[j].obterMedia() <= 50) {
							System.out.printf("\t|%.2f|", aluno[i].notas[j].obterMedia());
							System.out.println("\n");
						} else {
							System.out.printf("\t%.2f", aluno[i].notas[j].obterMedia());
							System.out.println("\n");
						}
					}
				}
				System.out.println(aluno[i].obterConceito());
				System.out.println("\n");
				
			}

		}
	}

	public static Aluno obterDados(String nome) {
		for (int i = 0; i < aluno.length; i++) {
			if (aluno[i] != null && aluno[i].nome.equals(nome)) {
				return aluno[i];
			}
		}
		return null;
	}

	public static Aluno obterDados(int ra) {
		for (int i = 0; i < aluno.length; i++) {
			if (aluno[i] != null && aluno[i].ra == ra) {
				return aluno[i];
			}
		}
		return null;
	}
	public static void listarAprovados(){
		
		for (int i = 0; i < aluno.length; i++) {
			if (aluno[i] != null && aluno[i].obterConceito().equals("Aluno(a) " + aluno[i].nome + " Foi aprovado!")) {
				System.out.println(aluno[i].obterConceito());
				System.out.println("\n");
			}
			
		}
	}
	
public static void listarReprovados(){
		
		for (int i = 0; i < aluno.length; i++) {
			if (aluno[i] != null && aluno[i].obterConceito().equals("Aluno(a) " + aluno[i].nome + " Foi reprovado!")) {
				System.out.println(aluno[i].obterConceito());
				System.out.println("\n");
			}
		}
	}
}