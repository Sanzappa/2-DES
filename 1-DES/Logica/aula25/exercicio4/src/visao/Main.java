package visao;

import java.util.Scanner;

import controle.ProcessaUsuario;

public class Main {
	
	private static Scanner s = new Scanner(System.in);
	public static void main(String[] args) {
		System.out.println("Digite seu login");
		String email = s.next();
		
		System.out.println("Digite sua senha");
		String senha = s.next();
		
		ProcessaUsuario.carregar();
		ProcessaUsuario.saida(email, senha);
	}

}