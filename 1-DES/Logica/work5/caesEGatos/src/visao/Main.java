package visao;

import modelo.Gato;

import java.util.ArrayList;
import java.util.Scanner;

import modelo.Cao;

public class Main {

	private static Scanner scan = new Scanner(System.in);
	private static ArrayList<Cao> caes = new ArrayList<>();
	private static ArrayList<Gato> gatos = new ArrayList<>();

	public static void main(String[] args) {

		int menu = 0;

		while (menu != 5) {
			System.out.println("Digite uma opção: ");
			System.out.println("1- Cadastrar Cão\t2- Cadastrar Gato\t3- Listar Cães\t4- Listar Gatos\t5- Sair");
			menu = scan.nextInt();

			switch (menu) {
			case 1:
				cadastrarCao();
				break;
			case 2:
				cadastrarGato();
				break;
			case 3:
				listarCão();
				break;
			case 4:
				listarGato();
				break;
			default:
				break;
			}
		}
	}

	private static void cadastrarCao() {
		System.out.println("Especie\tNome\tPeso\tRaça\tQuantidade de Motoqueiros Atacados");
		Cao cao = new Cao(scan.next(), scan.next(), scan.nextFloat(), scan.next(), scan.nextInt());
		caes.add(cao);
}

	private static void cadastrarGato() {
		System.out.println("Especie\tNome\tPeso\tRaça\tQuantidade de Vidas");
		Gato gato = new Gato(scan.next(), scan.next(), scan.nextFloat(), scan.next(), scan.nextInt());
		gatos.add(gato);
		}
	private static void listarCão() {
		for (Cao c : caes) {
			System.out.println(c.toString());
		}
	}

	private static void listarGato() {
		for (Gato g : gatos) {
			System.out.println(g.toString());
		}
	}
}