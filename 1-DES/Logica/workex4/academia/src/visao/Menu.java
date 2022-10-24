package visao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;
import modelo.Aparelho;

public class Menu {

	private static Aparelho[] aparelho = new Aparelho[10];
	private static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) throws ParseException {
		

		int op = 0;

		while (op != 3) {
			System.out.println("Digite uma opção");
			System.out.println("1- Cadastrar Aparelhos\t2- Listar Aparelhos");
			op = scan.nextInt();

			switch (op) {
			case 1:
				cadastrarAparelho();
				break;
			case 2:
				listarAparelho();
				break;
			default:
				System.out.println("Digita um valido ai");
				break;
			}
		}
	}

	private static void cadastrarAparelho() throws ParseException {

		for (int i = 0; i < aparelho.length; i++) {
			if (aparelho[9] == null) {
				if (aparelho[i] == null) {
					
					System.out.println("Digite o nome do aparelho");
					String nome = scan.next();
					
					System.out.println("Digite o tipo de exercicio");
					String tipoExercicio = scan.next();
					
					System.out.println("Digite o grupo muscular");
					String grupoMuscular = scan.next();
					
					System.out.println("Digite a data de aquisição (dd/mm/aaaa)");
					String dataAq = scan.next();
					
					Date dataAquisicao = new SimpleDateFormat("dd/MM/yyyy").parse(dataAq);
					
					System.out.println("Digite o valor da aquisição");
					double valorAquisicao = scan.nextDouble();
					
					aparelho[i] = new Aparelho(nome, tipoExercicio, grupoMuscular, dataAquisicao, valorAquisicao);
					break;
				}else {
					System.out.println("Limite excedido");
				}
			}
		}
	}

	private static void listarAparelho() {
		System.out.println("Nome do aparelho\ttipo de exercicio\tgrupo muscular\tdata de aquisição\tvalor da aquisição");
		for (int i = 0; i < aparelho.length; i++) {
			if (aparelho[i] != null) {
				System.out.println(aparelho[i].paraString());
			}
		}
	}
}