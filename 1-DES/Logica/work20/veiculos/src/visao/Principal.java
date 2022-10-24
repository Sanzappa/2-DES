package visao;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Scanner;

import modelo.Carro;
import modelo.Moto;
import modelo.Veiculo;

public class Principal {
	private static Scanner scan = new Scanner(System.in);
	private static ArrayList<Carro> carros = new ArrayList();
	private static ArrayList<Moto> motos = new ArrayList();

	public static void main(String[] args) throws ParseException {
		int menu = 0;

		while (menu != 5) {
			System.out.println("Selecione uma Opção");
			System.out.println("1 - Cadastrar carro\n2- cadastrar moto\n3- Listar Carro\n4- Listar moto\n5- Sair");
			menu = scan.nextInt();

			switch (menu) {
			case 1: {
				cadastrarCarro();
				break;
			}
			case 2:
				cadastrarMoto();
				break;
			case 3:
				listarCarro();
				break;
			case 4:
				listarMoto();
				break;
			case 5:
				System.out.println("Adeus");
				break;
			default:
				System.out.println("Numero inválido, selecione um numero valido");
				break;
			}
		}
	}

	public static void cadastrarCarro() throws ParseException {

		System.out.println("digite a placa do carro");
		String placa = scan.next();

		System.out.println("Ano do modelo");
		int anoModelo = scan.nextInt();

		System.out.println("Digite o ano de fabricação");
		int anoFabricacao = scan.nextInt();

		System.out.println("Digite o modelo");
		String modelo = scan.next();

		System.out.println("Digite a marca");
		String marca = scan.next();

		System.out.println("digite o valor do carro");
		double valor = scan.nextDouble();

		System.out.println("digite o tipo de carro");
		String tipo = scan.next();

		System.out.println("digite a quantia de passageiros");
		int passageiros = scan.nextInt();

		carros.add(new Carro(tipo, passageiros, placa, anoModelo, anoFabricacao, modelo, marca, valor));
	}

	public static void cadastrarMoto() throws ParseException {

		System.out.println("digite a placa da moto");
		String placa = scan.next();

		System.out.println("Ano do modelo");
		int anoModelo = scan.nextInt();

		System.out.println("Digite o ano de fabricação");
		int anoFabricacao = scan.nextInt();

		System.out.println("Digite o modelo");
		String modelo = scan.next();

		System.out.println("Digite a marca");
		String marca = scan.next();

		System.out.println("digite o valor da moto");
		double valor = scan.nextDouble();

		System.out.println("Digite a quantia de cilindradas da moto");
		int cilindradas = scan.nextInt();

		motos.add(new Moto(cilindradas, placa, anoModelo, anoFabricacao, modelo, marca, valor));
	}

	public static void listarCarro() {

		if (carros.size() < 1) {
			System.out.println("Nenhum carro cadastrado");
		} else {
			for (Carro carro : carros) {
				System.out.println(carro.toString());
			}

		}
	}
	public static void listarMoto() {
		if (motos.size() < 1) {
			System.out.println("Nenhuma moto cadastrada");
		} else {
			for (Moto moto : motos) {
				System.out.println(moto.toString());
			}

		}
	}
}