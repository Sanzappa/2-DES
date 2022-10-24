package visao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

import modelo.Cliente;
import modelo.Funcionario;
import modelo.Venda;

public class Principal {
	private static Scanner scan = new Scanner(System.in);
	private static ArrayList<Funcionario> funcionarios = new ArrayList();
	private static ArrayList<Cliente> clientes = new ArrayList();
	private static ArrayList<Venda> vendas = new ArrayList();

	public static void main(String[] args) throws ParseException {
		int menu = 0;

		while (menu != 7) {
			System.out.println("Selecione uma Opção");
			System.out.println(
					"1 - Cadastrar Funcionario\n2- Cadastrar Cliente\n3- Listar funcionarios\n4- Listar clientes\n5- Cadastrar vendas\n6- Listar vendas\n7- Sair");
			menu = scan.nextInt();

			switch (menu) {
			case 1: {
				cadastrarFuncionario();
				break;
			}
			case 2:
				cadastrarCliente();
				break;
			case 3:
				listarFuncionarios();
				break;
			case 4:
				listarClientes();
				break;
			case 5:
				cadastrarVendas();
				break;
			case 6:
				listarVendas();
				break;
			case 7:
				System.out.println("Adeus");
				break;
			default:
				System.out.println("Numero inválido, selecione um numero valido");
				break;
			}
		}
	}

	public static void cadastrarFuncionario() throws ParseException {

		int matricula = funcionarios.size() + 1;

		System.out.println("\nDigite o nome");
		String nome = scan.next();

		System.out.println("\nDigite o telefone");
		String telefone = scan.next();

		System.out.println("Digite o nascimento");
		Date nascimento = new SimpleDateFormat("dd/MM/yyyy").parse(scan.next());

		System.out.println("Digite a comissao do funcionario");
		double comissao = scan.nextDouble();

		funcionarios.add(new Funcionario(matricula, comissao, nome, telefone, nascimento));
	}

	public static void cadastrarCliente() throws ParseException {

		int id = clientes.size() + 1;

		System.out.println("Digite o nome do cliente");
		String nome = scan.next();

		System.out.println("Digite o telefone do cliente");
		String telefone = scan.next();

		System.out.println("Digite a data de nascimento do cliente");
		Date nascimento = new SimpleDateFormat("dd/MM/yyyy").parse(scan.next());

		System.out.println("Digite o valor do credito limite do cliente");
		double creditoLimite = scan.nextDouble();

		clientes.add(new Cliente(id, creditoLimite, nome, telefone, nascimento));

	}

	public static void listarFuncionarios() throws ParseException {
		if (funcionarios.size() < 1) {
			System.out.println("Nenhum funcionario cadastrado");
		} else {

			System.out.println("Nome\tTelefone\tData de nascimento\tcomissao");
			for (Funcionario funcionario : funcionarios) {
				System.out.println(funcionario.toString());
			}

		}
	}

	public static void listarClientes() throws ParseException {
		if (clientes.size() < 1) {
			System.out.println("Nenhum cliente cadastrado");
		} else {
			System.out.println("Nome\tTelefone\tData de nascimento\tCredito Limite");
			for (Cliente cliente : clientes) {
				System.out.println(clientes.toString());
			}
		}
	}

	public static void cadastrarVendas() throws ParseException {
		int id2 = vendas.size() + 1;

		boolean igual = true;

		int matricula;
		int id;

		do {
			System.out.println("Digite a matricula do funcionario vendedor");
			matricula = scan.nextInt();

			for (Funcionario funcionario : funcionarios) {

				if (matricula == funcionario.getMatricula()) {
					igual = false;
				} else {
					System.out.println("Funcionario nao encontrado");
				}
			}

		} while (igual);

		boolean diferente = true;
		do {
			System.out.println("Digite o id do cliente");
			id = scan.nextInt();

			for (Cliente cliente : clientes) {

				if (id == cliente.getId()) {
					diferente = false;
				} else {
					System.out.println("Cliente nao encontrado");
				}
			}

		} while (diferente);

		System.out.println("Digite o valor");
		double valor = scan.nextDouble();

		vendas.add(new Venda(id, matricula, valor));

	}

	public static void listarVendas() throws ParseException {
		if (vendas.size() < 1) {
			System.out.println("Nenhuma venda cadastrada");
		} else {
			System.out.println("id\tmatricula\tvalor");
			for (Venda venda : vendas) {
				System.out.println(vendas.toString());
			}
		}
	}
}